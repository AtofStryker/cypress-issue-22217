const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  clientCertificates: [
    {
      url: 'https://websocketstest.com/',
      ca: [],
      certs: [
        {
          key: 'cypress/certs/ca-key.pem',
          cert: 'cypress/certs/ca-cert.pem'
        }
      ]
    }
  ]
});
