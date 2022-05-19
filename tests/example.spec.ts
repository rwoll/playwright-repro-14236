import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto('https://example.com');
});

test('example', async ({ page }) => {
  expect(await page.evaluate(() => 1)).toBe(1);
});
