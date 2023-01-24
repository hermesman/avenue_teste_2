const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: "https://www.amazon.com.br",
    viewportWidth: 1440,
    viewportHeight: 900,
    chromeWebSecurity: false,
    downloadsFolder: 'cypress/downloads',
    retries:{
      runMode: 2,
      openMode: 2,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
});
