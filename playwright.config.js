
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 1,
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: "on",
    trace: 'retain-on-failure',
  }
});