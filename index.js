require('babel-register')({
  presets: [ 'env' ]
})
const { default: App } = require('./src/App')

/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = (app) => new App(app)
