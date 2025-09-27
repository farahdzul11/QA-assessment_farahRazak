// QA-assessment_farahRazak
// playwright.config.js
// Basic Playwright configuration
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    baseURL: 'https://qainterview.netlify.app/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
