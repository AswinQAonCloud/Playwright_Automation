

import { test, expect } from '@playwright/test';

test.describe('All Types of Playwright Locators - Full Demo', () => {
  
  test('01 - Text & Role Locators', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.click("//h5[normalize-space()='Forms']");
    await page.click("//div[normalize-space()='Elements']");
    await page.click("//span[normalize-space()='Text Box']");

    // By visible text
    await page.getByText('Full Name').isVisible();

    // By role + name (accessibility locator)
    await page.getByRole('button', { name: 'Submit' }).isVisible();
  });

  test('02 - Placeholder, Label, Title, Alt Text', async ({ page }) => {
    await page.goto('https://demoqa.com/');
      await page.click("//h5[normalize-space()='Forms']");
      await page.click("//div[normalize-space()='Elements']");
      await page.click("//span[normalize-space()='Text Box']");

    // By placeholder text
    await page.getByPlaceholder('Full Name').fill('John Doe');

    // By label text
    await page.getByLabel('Email').fill('john@demo.com');
  });

  test('03 - CSS Selectors', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.click("//h5[normalize-space()='Forms']");
    await page.click("//div[normalize-space()='Elements']");
    await page.click("//span[normalize-space()='Text Box']");

    // By ID
    await page.locator('#userName').fill('CSS ID');

    // By Class
    await page.locator('.form-control').first().fill('CSS Class');

    // By Attribute
    await page.locator('input[placeholder="name@example.com"]').fill('attr@test.com');

    // Combination
    await page.locator('input#userEmail.form-control').fill('combo@test.com');
  });

  test('04 - XPath Locators', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.click("//h5[normalize-space()='Forms']");
    await page.click("//div[normalize-space()='Elements']");
    await page.click("//span[normalize-space()='Text Box']");

    await page.locator('//input[@id="userName"]').fill('XPath User');
    await page.locator('//input[@id="userEmail"]').fill('xpath@example.com');
    await page.locator('//button[@id="submit"]').click();

    const name = await page.locator('//p[@id="name"]').textContent();
    expect(name).toContain('XPath User');
  });

  test('05 - nth Element and Filtering', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.click("//h5[normalize-space()='Forms']");
    await page.click("//div[normalize-space()='Elements']");
    await page.click("//span[normalize-space()='Text Box']");

    // First input using nth (CSS-style)
    await page.locator('input').nth(0).fill('First Input');

    // Filter by text
    await page.getByRole('button').filter({ hasText: 'Submit' }).click();
  });

  test('06 - Using has, hasText, and combining locators', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.click("//h5[normalize-space()='Forms']");
    await page.click("//div[normalize-space()='Elements']");
    await page.click("//span[normalize-space()='Text Box']");

    const form = page.locator('form');

    // Locate form containing specific text
    const output = form.locator('div').filter({ hasText: 'Name' });

    expect(await output.isVisible()).toBeTruthy();
  });

  test('07 - Nested (Chained) Locators', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.click("//h5[normalize-space()='Forms']");
    await page.click("//div[normalize-space()='Elements']");
    await page.click("//span[normalize-space()='Text Box']");

    // Parent -> Child
    const parent = page.locator('form');
    const childInput = parent.locator('input#userName');

    await childInput.fill('Nested Locator');
  });

});
