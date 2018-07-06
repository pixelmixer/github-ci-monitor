import axios from 'axios'
import strip_ansi from 'strip-ansi'
import { URL } from 'url'
import {
  TRAVIS_ACCESS_TOKEN,
  GET_TRAVIS_BUILD_PATH,
  GET_GITHUB_PULL_REQUEST_PATH,
  GET_TRAVIS_JOB_LOG_PATH,
  PULL_REQUEST_EVENT
} from './constants'

const findAssociatedPullRequest = ({ sha: pr_sha, pullRequests }) => {
  return pullRequests.find((request) => {
    const {
      head: {
        sha
      }
    } = request

    return pr_sha === sha
  })
}

const processBuildResponse = ({ target_url, html_url, sha, buildResponse: { data: { jobs = [] } } }) => {
  return new Promise((resolve, reject) => {
    if (jobs.length === 0 || !jobs) {
      reject(new Error(`There aren't any jobs to process so we won't be able to get any build logs.`))
    }

    // Since there can be multiple simultaneous jobs we'll need to account for when the jobs
    const jobList = [...jobs].map(({ '@href': jobLink }) => axios({ url: GET_TRAVIS_JOB_LOG_PATH(jobLink), method: 'GET' }))

    // There can potentially be multiple jobs running, so let's potentially add a comment for each job.
    axios.all(jobList)
      .then((allJobs) => {
        allJobs.forEach(({ data }) => {
          const strippedData = strip_ansi(data)

          let fail = strippedData.match(/(FAIL {2}.+)/gm)
          let summary = strippedData.match(/(✕ .+)/gm)
          let code = strippedData.match(/(● .+)|(Expected: .*)|(Received: .*)|( {6}at.*)|( {4,}Jest: .*)|( .{6}[0-9]* \|.*)/gm)
          let error = strippedData.match(/(^error .*)/gm)
          let body = []

          if (fail && error) {
            fail = fail.join('\n').replace('FAIL  ', `[Travis build](${target_url}) failed 💩 in [${sha.substr(0, 7)}](${html_url}) 🤦🤦 at `)
            error = error.join('\n').replace(`error `, `Error: `)

            // Add the failure title and details if they exist.
            body = [...body, `${fail}\n${error}\n`]
          }

          if (summary) {
            body = [...body, `**Failure Summary**\n\`\`\`\n${summary.join('\n')}\n\`\`\``]
          }

          if (code) {
            body = [...body, `<details><summary><strong>Failure Details</strong></summary><p>\n\n\`\`\`\n${code.join('\n')}\n\`\`\`\n</p>`]
          }

          // If we get to this point and there is still no message associated with this job then leave a useful generic message.
          if (body.length === 0) {
            body = [`Unfortunately we couldn't determine the cause of the failure.\nPlease reference the [travis build](${target_url}) or the corresponding git commit [${sha.substr(0, 7)}](${html_url}) for more help.`]
          }

          resolve(body.join('\n'))
        })
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const processPullRequestResponse = ({ sha, pullRequestResponse: { data: pullRequests } }) => {
  return new Promise((resolve, reject) => {
    if (!pullRequests) {
      reject(new Error(`The pull request response didn't have any data associated with it.`))
    }
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

    resolve([number, login, name])
  })
}

const updatePullRequest = ({ owner, repo, number, body, context }) => {
  return context.github.issues.createComment({owner, repo, number, body})
}

const combineResponses = ({ buildResponse, pullRequestResponse, sha, html_url, target_url, context }) => {
  if (!pullRequestResponse || !buildResponse) {
    throw new Error('There appears to be no pull request or build data available to generate comments with.')
  }

  Promise.all([
    processPullRequestResponse({ sha, pullRequestResponse }),
    processBuildResponse({ target_url, html_url, sha, buildResponse })
  ])
    .then(([
      [number, login, name],
      comment
    ]) => {
      updatePullRequest({ owner: login, repo: name, number, body: comment, context })
        .then(({ data: { url } }) => {
          context.log(`Successfully added comment at ${url}`)
        })
        .catch((err) => {
          throw new Error(err)
        })
    })
    .catch((err) => {
      throw new Error(err)
    })
}

const handleGithubEvent = (context) => {
  console.log(context)
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
      throw new Error(`Target URL was not provided or was invalid.`)
    }

    // Get the build id so we can find build details (and eventually the job log)
    const url = new URL(target_url)

    if (!url.pathname) {
      throw new Error(`Target URL was not provided or was invalid.`)
    }

    // Deconstruct the Travis target_url provided in the event to grab the associated Travis build id.
    const [, buildId] = url.pathname.match(/\/([0-9]{5,})/i)

    if (!buildId || !name) {
      throw new Error(`Build ID wasn't found or is inaccessible.`)
    }

    context.log('Retrieving Build and Pull Request Details')

    const travisBuildPromise = axios({
      url: GET_TRAVIS_BUILD_PATH(buildId),
      method: 'GET',
      headers: {
        'Travis-API-Version': '3',
        'Authorization': `token ${TRAVIS_ACCESS_TOKEN}`
      }
    })
    const githubPullRequestPromise = axios({
      url: GET_GITHUB_PULL_REQUEST_PATH(name),
      method: 'GET'
    })

    // We need combined data from both Travis's job logs and github's pull request data so let's just get them both here.
    Promise.all([ travisBuildPromise, githubPullRequestPromise ])
      .then(([buildResponse, pullRequestResponse]) => combineResponses({ buildResponse, pullRequestResponse, sha, html_url, target_url, context }))
      .catch((reason) => {
        throw new Error(reason)
      })
  }
}

export default (app) => app.on(PULL_REQUEST_EVENT, handleGithubEvent)
