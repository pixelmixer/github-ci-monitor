require('babel-register')({
  presets: [ 'env' ]
})

const handleGithubEvent = require('./src/App').handleGithubEvent
const GITHUB_EVENT = require('./src/constants').GITHUB_EVENT

/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = (app) => app.on(GITHUB_EVENT, handleGithubEvent)
