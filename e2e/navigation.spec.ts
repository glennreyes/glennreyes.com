import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate from home to about page', async ({ page }) => {
    await page.goto('/');

    // Click on About link in navigation
    await page.click('a[href="/about"]');

    // Wait for navigation
    await page.waitForURL('/about');

    // Verify we're on the about page
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('Glenn Reyes');
  });

  test('should navigate back to home by clicking avatar', async ({ page }) => {
    await page.goto('/about');

    // Wait for avatar to be visible in navbar
    await page.waitForSelector('nav a[href="/"]', { state: 'visible' });

    // Click avatar in navbar
    await page.click('nav a[href="/"]');

    // Wait for navigation
    await page.waitForURL('/');

    // Verify we're on the home page
    await expect(page).toHaveURL('/');
  });

  test('should have working navigation menu', async ({ page }) => {
    await page.goto('/');

    // Verify all main navigation links are present
    const navLinks = [
      { href: '/about', text: 'About' },
      { href: '/posts', text: 'Posts' },
      { href: '/talks', text: 'Talks' },
      { href: '/workshops', text: 'Workshops' },
    ];

    for (const link of navLinks) {
      const element = page.locator(`a[href="${link.href}"]`);

      await expect(element).toBeVisible();
    }
  });
});
