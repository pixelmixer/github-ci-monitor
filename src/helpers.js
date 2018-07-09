import {
  TRAVIS_BUILD_PATH,
  TRAVIS_API_BASE,
  GITHUB_REPO_PATH
} from './constants'

export const GET_TRAVIS_BUILD_PATH = (buildId) => `${TRAVIS_BUILD_PATH}/${buildId}`
export const GET_TRAVIS_JOB_LOG_PATH = (jobPath) => `${TRAVIS_API_BASE}/v3${jobPath}/log.txt`
export const GET_GITHUB_PULL_REQUEST_PATH = (name) => `${GITHUB_REPO_PATH}/${name}/pulls`
