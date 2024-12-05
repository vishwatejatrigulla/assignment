import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.demoblaze.com/#');

  // Expect the page title to contain "STORE"
  await expect(page).toHaveTitle(/STORE/);
});

test('navigate to a product', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.demoblaze.com/#');

  // Click on the "Samsung galaxy s6" product link
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();

  // Expect the product description to be visible
  await expect(page.locator('#tbodyid')).toContainText('Samsung galaxy s6');
});

test('navigate to a category', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.demoblaze.com/#');

  // Click on the "Laptops" category
  await page.getByRole('link', { name: 'Laptops' }).click();

  // Expect the category to load products
  await expect(page.locator('#tbodyid')).toBeVisible();
});
