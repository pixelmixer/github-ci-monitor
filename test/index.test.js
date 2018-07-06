// You can import your modules
// const index = require('../index')
import App from '../src/App.js'

test('that we can run tests', () => {
  // your real tests go here
  expect(1 + 2 + 3).toBe(6)
})

test('that app exists', () => {
  expect(App).not.toBeNull()
})

// For more information about testing with Jest see:
// https://facebook.github.io/jest/
