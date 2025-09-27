// QA-assessment_farahRazak
// test/login.spec.js
import { test, expect } from '@playwright/test';

test('Successful login test', async ({ page }) => {
  // Navigate to login page
  await page.goto('/');
  await page.click('text=Login'); // adjust if selector differs

  // Fill in credentials (replace with actual valid test account)
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'Password123');

  // Submit login
  await page.click('button[type="submit"]');

  // Assertion: Verify successful login message or dashboard element
  await expect(page.locator('h1')).toContainText('Welcome');
});
