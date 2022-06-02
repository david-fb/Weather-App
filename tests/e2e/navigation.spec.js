const { test, expect } = require('@playwright/test');

test('should navigate to the My Cities page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.js)
  await page.goto('/');
  // Find an element with the text 'My Cities' and click on it
  await page.click('text=My Cities');
  // The new url should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('/mycities');
  // The new page should contain an h1 with "My Cities"
  await expect(page.locator('h1')).toContainText('My Cities');
});

test('should navigate to the home page clicking My Position', async ({ page }) => {
  // Start from the My Cities page (the baseURL is set via the webServer in the playwright.config.js)
  await page.goto('/mycities');
  // Find an element with the text 'My Position' and click on it
  await page.click('text=My Position');
  // The new url should be "/" (baseURL is used there)
  await expect(page).toHaveURL('/');
  // The new page should contain a h1 with "Santiago De Cali"
  await expect(page.locator('h1')).toContainText('Santiago De Cali');
  // The new page should contain a h2 with "Colombia"
  await expect(page.locator('h2')).toContainText('Colombia');
});

test('should navigate to the home page clicking Home', async ({ page }) => {
  // Start from the My Cities page (the baseURL is set via the webServer in the playwright.config.js)
  await page.goto('/mycities');
  // Find an element a with the text 'Home' and click on it
  await page.click('a:has-text("Home")');
  // The new url should be "/" (baseURL is used there)
  await expect(page).toHaveURL('/');
  // The new page should contain a h1 with "Cali"
  await expect(page.locator('h1')).toContainText('Cali');
  // The new page should contain a h2 with "Colombia"
  await expect(page.locator('h2')).toContainText('Colombia');
});
