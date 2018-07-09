/* eslint-disable camelcase */

import axios from 'axios'
import strip_ansi from 'strip-ansi'
import { URL } from 'url'
import {
  TRAVIS_ACCESS_TOKEN,
  GITHUB_EVENT
} from './constants'
import {
  GET_TRAVIS_BUILD_PATH,
  GET_GITHUB_PULL_REQUEST_PATH,
  GET_TRAVIS_JOB_LOG_PATH
} from './helpers'

export const findAssociatedPullRequest = ({ sha: pr_sha, pullRequests }) => {
  // Just use a simple find method to scan the list of requests for a PR.
  return pullRequests.find((request) => {
    const {
      head: {
        sha
      }
    } = request

    return pr_sha === sha
  })
}

export const processBuildResponse = ({ target_url, html_url, sha, buildResponse: { data: { jobs = [] } } }) => {
  return new Promise((resolve, reject) => {
    // If there aren't any jobs detected then we're going to have a bad time looking for the build logs.
    if (jobs.length === 0 || !jobs) {
      reject(new Error(`There aren't any jobs to process so we won't be able to get any build logs.`))
    }

    // Since there can be multiple simultaneous jobs we'll need to account for when the jobs
    const jobList = [...jobs].map(({ '@href': jobLink }) => axios.get(GET_TRAVIS_JOB_LOG_PATH(jobLink)))

    // There can potentially be multiple jobs running, so let's potentially add a comment for each job.
    Promise.all(jobList)
      .then((allJobs) => {
        allJobs.forEach(({ data }) => {
          // The logs come back with all sorts of ansi data that makes it pretty noisy so clean it up first.
          const strippedData = strip_ansi(data)

          // Let's extract the code and details we need for a summary from the cleaned data.
          let fail = strippedData.match(/(FAIL {2}.+)/g)
          let summary = strippedData.match(/((✕|âœ•) .+)/g)
          let code = strippedData.match(/( *(?:●|â—) (?:[\s\S]*))(?=(?:Ran all test))/g)
          let body = []

          // We'll wrap all of these in conditionals and build a body to avoid breaking if parts aren't available.
          if (fail) {
            fail = fail.join('\n').replace('FAIL  ', `[Travis build](${target_url}) failed 💩 in [${sha.substr(0, 7)}](${html_url}) 🤦🤦 at `)

            // Add the failure title and details if they exist.
            body = [...body, `${fail}\n`]
          }

          // Build out the summary and add some markdown icing.
          if (summary) {
            body = [...body, `**Failure Summary**\n\`\`\`\n${summary.join('\n')}\n\`\`\``]
          }

          // Wrap the code in a <details> element so we can benefit from native expanding/contracting
          if (code) {
            body = [...body, `<details><summary><strong>Failure Details</strong></summary><p>\n\n\`\`\`\n${code}\n\`\`\`\n</p>`]
          }

          // If we get to this point and there is still no message associated with this job then leave a useful generic message.
          if (body.length === 0) {
            body = [`Unfortunately we couldn't determine the cause of the failure.\nPlease reference the [travis build](${target_url}) or the corresponding git commit [${sha.substr(0, 7)}](${html_url}) for more help.`]
          }

          // We built body as an array and we can easily join it with new lines here.
          resolve(body.join('\n'))
        })
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const processPullRequestResponse = ({ sha, pullRequestResponse: { data: pullRequests } }) => {
  return new Promise((resolve, reject) => {
    if (!pullRequests) {
      reject(new Error(`The pull request response didn't have any data associated with it.`))
    }
    // Do a quick search of the pull requests to find if we're actually dealing with a valid PR.
    const relevantPullRequest = findAssociatedPullRequest({ sha, pullRequests })

    if (!relevantPullRequest) {
      reject(new Error(`There doesn't appear to be a related pull request for this event.`))
    }

    const {
      number,
      head: {
        repo: {
          name,
          owner: {
            login
          }
        }
      }
    } = relevantPullRequest

    // The pull request number is most important here since we'll need this for comment adding later.
    resolve([number, login, name])
  })
}

export const updatePullRequest = ({ owner, repo, number, body, context }) => {
  // We can use the github api to create our comment here.
  return context.github.issues.createComment({owner, repo, number, body})
}

export const combineResponses = ({ buildResponse, pullRequestResponse, sha, html_url, target_url, context }) => {
  return new Promise((resolve, reject) => {
    if (!pullRequestResponse || !buildResponse) {
      reject(new Error('There appears to be no pull request or build data available to generate comments with.'))
    }

    // Combine both promises and pass them through to whoever needs them combined.
    resolve(Promise.all([
      processPullRequestResponse({ sha, pullRequestResponse }),
      processBuildResponse({ target_url, html_url, sha, buildResponse })
    ]))
  })
}

export const handleGithubEvent = (context) => {
  return new Promise((resolve, reject) => {
    const {
      state, // State is important to tell whether the build was a failure or not.
      target_url, // Processing the target_url is one of the fastest ways we can grab the build id out of the notification.
      name, // Helps us define a proper path to the github repo.
      commit: { // Pull out some important commit details.
        sha, //  SHA is used to find the relevant PR since we can't just get a list of PRs based on the SHA directly.
        html_url //  Just used to help create a useful link to the commit in the comments.
      }
    } = context.payload

    // Let's make sure the build actually was a failure before trying to generate any messaging about it.
    if (state === 'failure') {
      if (!target_url) {
        reject(new Error(`Target URL was not provided or was invalid.`))
      }

      // Get the build id so we can find build details (and eventually the job log)
      const url = new URL(target_url)

      if (!url.pathname) {
        reject(new Error(`Target URL was not provided or was invalid.`))
      }

      // Deconstruct the Travis target_url provided in the event to grab the associated Travis build id.
      // Here we're just matching a number in the url that is at least 5 characters long to get the build id.
      const [, buildId] = url.pathname.match(/\/([0-9]{5,})/i)

      // If we can't determine the build id then we won't be able to find the build log path.
      if (!buildId || !name) {
        reject(new Error(`Build ID wasn't found or is inaccessible.`))
      }

      // Let any log snoops know that we're getting build and pull request details now.
      context.log('Retrieving Build and Pull Request Details')

      // Setup our axios calls to retrieve the build results and pull request details.
      const travisBuildPromise = axios.get(GET_TRAVIS_BUILD_PATH(buildId), {
        headers: {
          'Travis-API-Version': '3',
          'Authorization': `token ${TRAVIS_ACCESS_TOKEN}`
        }
      })
      const githubPullRequestPromise = axios.get(GET_GITHUB_PULL_REQUEST_PATH(name))

      // We need combined data from both Travis's job logs and github's pull request data so let's just get them both here.`
      Promise.all([travisBuildPromise, githubPullRequestPromise])
        .then(([buildResponse, pullRequestResponse]) => {
          // get the pull request details and a comment created by scanning the build logs.
          combineResponses({ buildResponse, pullRequestResponse, sha, html_url, target_url, context })
            .then(([
              [number, login, name],
              comment
            ]) => {
              // with the combined results send over the comment text to the pull request comment log.
              updatePullRequest({ owner: login, repo: name, number, body: comment, context })
                .then(({ url }) => {
                  resolve(`Successfully added comment at ${url}`)
                })
                .catch((err) => {
                  reject(new Error(err))
                })
            })
            .catch((err) => {
              reject(new Error(err))
            })
        })
        .catch((err) => {
          reject(new Error(err))
        })
    }
  })
}

export default (app) => app.on(GITHUB_EVENT, handleGithubEvent)
