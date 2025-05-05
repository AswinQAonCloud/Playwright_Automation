import { test, expect } from '@playwright/test';

test.describe('UI Test Scenarios with Playwright', () => {
  
    test('01 - Launch browser and navigate to site', async ({ page }) => {
      await page.goto('https://demoqa.com/');
      await page.click("//h5[normalize-space()='Forms']");
      await page.click("//div[normalize-space()='Elements']");
      await page.click("//span[normalize-space()='Text Box']");

      await expect(page).toHaveURL(/text-box/);
      await expect(page.locator('h1')).toHaveText('Text Box');
    });
  
    test('02 - Fill and submit form', async ({ page }) => {
      await page.goto('https://demoqa.com/');
      await page.click("//h5[normalize-space()='Forms']");
      await page.click("//div[normalize-space()='Elements']");
      await page.click("//span[normalize-space()='Text Box']");
  
      // Fill fields
      await page.fill('#userName', 'John Doe');
      await page.fill('#userEmail', 'john@example.com');
      await page.fill('#currentAddress', '123 Main St');
      await page.fill('#permanentAddress', '456 Another St');
  
      // Submit the form
      await page.click('#submit');
  
      // Validate output
      await expect(page.locator('#output')).toBeVisible();
      await expect(page.locator('#name')).toContainText('John Doe');
      await expect(page.locator('#email')).toContainText('john@example.com');
      await expect(page.locator("//p[@id='currentAddress']")).toContainText('123 Main St');
      await expect(page.locator("//p[@id='permanentAddress']")).toContainText('456 Another St');

    });
  
    test('03 - Take a screenshot after form submission', async ({ page }) => {
      await page.goto('https://demoqa.com/');
      await page.click("//h5[normalize-space()='Forms']");
      await page.click("//div[normalize-space()='Elements']");
      await page.click("//span[normalize-space()='Text Box']");
      
      await page.fill('#userName', 'Screenshot Tester');
      await page.fill('#userEmail', 'screenshot@test.com');
      await page.click('#submit');
      await page.screenshot({ path: 'form-submission.png', fullPage: true });
    });
  
  });