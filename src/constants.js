export const GITHUB_EVENT = 'status'
export const TRAVIS_API_BASE = 'https://api.travis-ci.org'
export const GITHUB_API_BASE = 'https://api.github.com'
export const TRAVIS_ACCESS_TOKEN = process.env.TRAVIS_ACCESS_TOKEN || 'mL91tdWS2i08g7ztJ2O2Ow'
export const TRAVIS_BUILD_PATH = `${TRAVIS_API_BASE}/build`
export const GITHUB_REPO_PATH = `${GITHUB_API_BASE}/repos`
