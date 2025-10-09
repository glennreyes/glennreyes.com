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

  test('should navigate to a post from the landing page', async ({ page }) => {
    await page.goto('/');

    // Find the Recent Posts section
    const recentPostsHeading = page.getByRole('heading', {
      level: 2,
      name: 'Recent Posts',
    });

    await expect(recentPostsHeading).toBeVisible();

    // Get the first post article element
    const firstPost = page.locator('article').first();
    // Get the post title (which is an h3 inside the article)
    const postTitleElement = firstPost.getByRole('heading', { level: 3 });
    const postTitle = await postTitleElement.textContent();

    // Click on the post title link
    await postTitleElement.getByRole('link').click();

    // Wait for navigation to the post page
    await page.waitForURL(/\/posts\/.+/);

    // Verify we're on a post page
    await expect(page).toHaveURL(/\/posts\/.+/);
    await expect(
      page.getByRole('heading', { level: 1, name: postTitle ?? '' }),
    ).toBeVisible();
  });
});
