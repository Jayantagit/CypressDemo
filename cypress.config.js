const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-localstorage-commands/plugin")(on, config);
      on('task', {downloadFile})
      return config;
    },
    screenshotOnRunFailure:true,
    retries:2
  },
});
