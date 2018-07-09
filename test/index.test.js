import axios from 'axios'
import { Application } from 'probot'
import {
  findAssociatedPullRequest,
  combineResponses,
  processBuildResponse,
  processPullRequestResponse,
  updatePullRequest,
  handleGithubEvent
} from '../src/App'
import * as createCommentResponse from './fixtures/create-comment.json'
import * as statusPayload from './fixtures/status.json'
import { travisLog } from './fixtures/travis-log'
const plugin = require('..')

jest.mock('axios')

describe('Github CI Monitor', () => {
  let app
  let github

  beforeEach(() => {
    app = new Application()
    app.load(plugin)

    github = {
      issues: {
        createComment: jest.fn().mockReturnValue(Promise.resolve(createCommentResponse))
      }
    }

    app.auth = () => Promise.resolve(github)
  })

  describe('application methods', () => {
    it('creates a comment with github api', () => {
      let commentResponse = updatePullRequest({ owner: 'octocat', repo: 'Hello-World', number: 1, body: 'Me too', context: { github } })
      expect(commentResponse).resolves.toEqual(createCommentResponse)
    })

    it('finds associated pull requests', () => {
      let result = { head: { sha: 'abcd7zx' } }
      let pr = findAssociatedPullRequest({ sha: 'abcd7zx', pullRequests: [result] })
      expect(pr).toEqual(result)
    })

    it('processes pull request responses', () => {
      let result = {
        number: 1,
        head: {
          sha: 'abcd7zx',
          repo: {
            name: 'reponame',
            owner: {
              login: 'testuser'
            }
          }
        }
      }

      expect(processPullRequestResponse({ sha: 'abcd7zx', pullRequestResponse: { data: [result] } })).resolves.toEqual([1, 'testuser', 'reponame'])
    })

    it('generates an appropriate comment', () => {
      axios.get.mockImplementation((request) => {
        return Promise.resolve(travisLog)
      })

      let buildResponse = processBuildResponse({
        target_url: 'https://example.com',
        html_url: 'https://example.com',
        sha: 'abcdefghijklmnop',
        buildResponse: {
          data: {
            jobs: [{ '@href': 'href' }]
          }
        }
      })

      expect(buildResponse).resolves.toMatch(/\*\*Failure Summary\*\*/gm)
      expect(buildResponse).resolves.toMatch(new RegExp('<details><summary><strong>Failure Details</strong></summary><p>', 'gm'))
    })

    it('combines responses', (done) => {
      let result = {
        number: 1,
        head: {
          sha: 'abcd7zx',
          repo: {
            name: 'reponame',
            owner: {
              login: 'testuser'
            }
          }
        }
      }

      axios.get.mockImplementation((request) => {
        return Promise.resolve(travisLog)
      })

      combineResponses({
        buildResponse: { data: { jobs: [{ '@href': 'href' }] } },
        pullRequestResponse: { data: [result] },
        sha: 'abcd7zx',
        html_url: 'html_url',
        target_url: 'target_url',
        context: { github }
      })
        .then((result) => {
          let [prDetails, results] = result

          expect(prDetails).toEqual([1, 'testuser', 'reponame'])
          expect(results).toMatch(/● Sums are calculated consistently/)
          expect(results).toMatch(/● Sum correctly adds two basic numbers/)
          expect(results).toMatch(/Tests: {7}2 failed, 1 passed, 3 total/)

          done()
        })
    })

    it('processses the github event', (done) => {
      let result = {
        number: 1,
        head: {
          sha: '0d7a35087beab9daf800f74f14f9f7aaefa698e2',
          repo: {
            name: 'reponame',
            owner: {
              login: 'testuser'
            }
          }
        }
      }

      // Let's mock the axios calls as they come in.
      axios.get
        // Mock the Travis Build Path API with a simple default array of jobs.
        .mockImplementationOnce((request) => {
          return Promise.resolve({ data: { jobs: [{ '@href': 'href' }] } })
        })
        // Mock the Github Pull Request Data API with a sample result.
        .mockImplementationOnce((request) => {
          return Promise.resolve({ data: [result] })
        })
        // Mock the Travis job details api with a sample job log.
        .mockImplementationOnce((request) => {
          return Promise.resolve(travisLog)
        })

      // Mock the context from the github event.
      const context = {
        payload: { ...statusPayload },
        log: jest.fn().mockImplementation(() => { }),
        github: {
          ...github,
          issues: {
            createComment: jest.fn().mockReturnValue(Promise.resolve(createCommentResponse))
          }
        }
      }

      handleGithubEvent(context)
        .then((result) => {
          expect(result).toBe(`Successfully added comment at https://api.github.com/repos/octocat/Hello-World/issues/comments/1`)
          done()
        })
    })
  })
})
