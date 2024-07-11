const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  defaultCommandTimeout: 20000,
  requestTimeout: 20000,
  pageLoadTimeout: 50000,
  chromeWebSecurity: false,
  viewPortWidth: 1920,
  viewPortHeight: 1080,
  videoCompression: true,
  screenshot: true,
  e2e: {
    baseUrl: 'https://automationteststore.com/',
    setupNodeEvents(on) {
      on('before:browser:lunch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-dev-shm-usage');
          return launchOptions;
        }
      })
    },

  },
});
