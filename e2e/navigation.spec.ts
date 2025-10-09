import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate from home to about page', async ({ page }) => {
    await page.goto('/');

    // Click on About link in navigation
    await page.getByRole('link', { name: 'About' }).click();

    // Wait for navigation
    await page.waitForURL('/about');

    // Verify we're on the about page
    await expect(page).toHaveURL('/about');
    await expect(
      page.getByRole('heading', { level: 1, name: /Glenn Reyes/i }),
    ).toBeVisible();
  });

  test('should navigate back to home by clicking avatar', async ({ page }) => {
    await page.goto('/about');

    // Click avatar/logo link in navbar to go home
    await page
      .getByRole('banner')
      .getByRole('link', { name: 'Glenn Reyes' })
      .click();

    // Wait for navigation
    await page.waitForURL('/');

    // Verify we're on the home page
    await expect(page).toHaveURL('/');
  });

  test('should have working navigation menu', async ({ page }) => {
    await page.goto('/');

    // Verify all main navigation links are present
    const navLinks = ['About', 'Posts', 'Talks', 'Workshops'];
    const nav = page.getByRole('navigation', { name: 'Main navigation' });

    for (const linkName of navLinks) {
      await expect(nav.getByRole('link', { name: linkName })).toBeVisible();
    }
  });
});
