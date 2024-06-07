const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'TryMimaSignUp',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl:'https://staging.trymima.com/',
    viewportHeight: 900,
    viewportWidth: 1680,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false, // this is because cypress discourages cross origin automation (javascript rule on the browser itself)
    watchForFileChanges:false, // this is to stop file changes while you are still working
    retries:{// to rerun your test if any of it fails
      runMode: 1,
      openMode: 1
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
