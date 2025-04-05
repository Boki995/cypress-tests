import { defineConfig } from 'cypress'

export default defineConfig({
   video:true,
   screenshotOnRunFailure: true,
  e2e: {
    baseUrl: "https://jira.trungk18.com/project/board",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },


  
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
   reportDir: 'cypress/reports',
   overwrite: false,
   html: true,
   json: true,
  }
});
