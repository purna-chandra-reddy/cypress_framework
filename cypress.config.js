const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  failOnStatusCode: false,
  retries: 1,
  reporter: '../node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: 'https://docs.cypress.io',
    specPattern:
      ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]
  },

  env: {
    baseUrl: 'https://docs.cypress.io',
    herokuHoost:"https://testpages.herokuapp.com"
  },

  
  
});
