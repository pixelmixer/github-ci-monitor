# Github CI Monitor
_A github application to monitor CI build issues and add comments to the offending pull requests describing the reason for the build failure. Built with [Probot](https://probot.github.io/)_

![TravisCI](https://travis-ci.org/pixelmixer/github-ci-monitor.svg?branch=master)

----


Usage
---
1. Install the application at [gh-ci-monitor](https://github.com/apps/gh-ci-monitor).
2. Select the repository to associate with this application.
3. Setup your repository to build with [TravisCI](https://travis-ci.org/).
4. Ensure that _Build on pull request_ is enabled in your build settings.
5. Create a new pull request in your github repository and if the associated TravisCI build fails then a new comment will be added to your Pull Request.

----

Contributing
---
#### Local Setup

1. Configure environment file according to the [Probot Instructions](https://probot.github.io/docs/development/#configuring-a-github-app).

2. Install dependencies and start the server with Yarn
```sh
yarn install
yarn start
```
or with node
```sh
node install
npm start
```

#### Testing
```sh
yarn test
```
or with node
```sh
npm test
```

----

Deployment
--

See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this plugin.

Disclosures
--
- This application was created as part of a coding challenge.
- To read more details about the development process and challenges give the [EXPERIENCE.md](EXPERIENCE.md) file a read.
