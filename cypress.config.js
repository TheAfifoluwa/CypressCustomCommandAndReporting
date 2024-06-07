const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://staging.trymima.com/',
    viewportHeight: 900,
    viewportWidth: 1680,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false, // this is because cypress discourages cross origin automation (javascript rule on the browser itself)
    watchForFileChanges:false, // this is to stop file changes while you are still working
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
