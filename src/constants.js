export const PULL_REQUEST_EVENT = 'status'

export const TRAVIS_API_BASE = 'https://api.travis-ci.org'
export const GITHUB_API_BASE = 'https://api.github.com'
export const TRAVIS_ACCESS_TOKEN = process.env.TRAVIS_ACCESS_TOKEN || 'mL91tdWS2i08g7ztJ2O2Ow'
export const TRAVIS_BUILD_PATH = `${TRAVIS_API_BASE}/build`
export const GITHUB_REPO_PATH = `${GITHUB_API_BASE}/repos`

export const GET_TRAVIS_BUILD_PATH = (buildId) => `${TRAVIS_BUILD_PATH}/${buildId}`
export const GET_TRAVIS_JOB_LOG_PATH = (jobPath) => `${TRAVIS_API_BASE}/v3${jobPath}/log.txt`
export const GET_GITHUB_PULL_REQUEST_PATH = (name) => `${GITHUB_REPO_PATH}/${name}/pulls`
