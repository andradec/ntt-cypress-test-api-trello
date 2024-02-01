const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.trello.com/1',
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/reports/videos',
    screenshotsFolder: 'cypress/reports/screenshots',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
