// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');
const path = require('path');

// Reference: https://playwright.dev/docs/test-configuration

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  // Timeout per test
  timeout: 30 * 1000,
  // Test directory
  testDir: path.join(__dirname, 'tests/e2e'),
  // If a test fails, retry it additional 2 times
  retries: 0,
  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: 'test-results/',

  // Run your local dev server before starting the tests:
  // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  webServer: {
    command: 'npm run dev',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    // Retry a test if its failing with enabled tracing. This allows you to analyse the DOM, console logs, network traffic etc.
    // More information: https://playwright.dev/docs/trace-viewer
    trace: 'retry-with-trace',

    // All available context options: https://playwright.dev/docs/api/class-browser#browser-new-context
    // contextOptions: {
    //   ignoreHTTPSErrors: true,
    // },
    locale: 'en-US',
    geolocation: { longitude: -76.52, latitude: 3.44 },
    permissions: ['geolocation'],
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
  ],
};
module.exports = config;
