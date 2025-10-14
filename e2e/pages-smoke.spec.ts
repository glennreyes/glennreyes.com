import { expect, test } from '@playwright/test';

test.describe('Page Smoke Tests', () => {
  test.describe('Static Pages', () => {
    test('home page loads and displays content', async ({ page }) => {
      await page.goto('/');

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('body')).toContainText('Glenn Reyes');
    });

    test('about page loads and displays content', async ({ page }) => {
      await page.goto('/about');

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('body')).toContainText('Glenn Reyes');
    });

    test('appearances page loads and displays content', async ({ page }) => {
      await page.goto('/appearances');

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('body')).toContainText('Appearances');
    });

    test('legal page loads and displays content', async ({ page }) => {
      await page.goto('/legal');

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('body')).toContainText('Legal');
    });

    test('mcp about page loads and displays content', async ({ page }) => {
      await page.goto('/mcp/about');

      await expect(page.locator('h1')).toBeVisible();
    });

    test('posts page loads and displays content', async ({ page }) => {
      await page.goto('/posts');

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('body')).toContainText('Writing');
    });

    test('privacy page loads and displays content', async ({ page }) => {
      await page.goto('/privacy');

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('body')).toContainText('Privacy');
    });

    test('subscribe confirm page loads and displays content', async ({
      page,
    }) => {
      await page.goto('/subscribe/confirm');

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('body')).toContainText('confirm');
    });

    test('subscribe thank you page loads and displays content', async ({
      page,
    }) => {
      await page.goto('/subscribe/thank-you');

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('body')).toContainText('subscribed');
    });

    test('talks page loads and displays content', async ({ page }) => {
      await page.goto('/talks');

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('body')).toContainText('Speaking');
    });

    test('uses page loads and displays content', async ({ page }) => {
      await page.goto('/uses');

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('body')).toContainText('Uses');
    });

    test('workshops page loads and displays content', async ({ page }) => {
      await page.goto('/workshops');

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('body')).toContainText('Workshops');
    });
  });

  test.describe('Dynamic Pages', () => {
    test('appearance detail page loads and displays content', async ({
      page,
    }) => {
      // Navigate to appearances page first to find a valid slug
      await page.goto('/appearances');

      // Find the first appearance link
      const firstAppearanceLink = page
        .locator('a[href^="/appearances/"]')
        .first();
      const href = await firstAppearanceLink.getAttribute('href');

      if (href) {
        await page.goto(href);

        await expect(page.locator('h1')).toBeVisible();
      } else {
        // Skip if no appearances exist
        test.skip();
      }
    });

    test('post detail page loads and displays content', async ({ page }) => {
      // Navigate to posts page first to find a valid slug
      await page.goto('/posts');

      // Find the first post link
      const firstPostLink = page.locator('a[href^="/posts/"]').first();
      const href = await firstPostLink.getAttribute('href');

      if (href) {
        await page.goto(href);

        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('article')).toBeVisible();
      } else {
        // Skip if no posts exist
        test.skip();
      }
    });

    test('talk detail page loads and displays content', async ({ page }) => {
      // Navigate to talks page first to find a valid slug
      await page.goto('/talks');

      // Find the first talk link
      const firstTalkLink = page.locator('a[href^="/talks/"]').first();
      const href = await firstTalkLink.getAttribute('href');

      if (href) {
        await page.goto(href);

        await expect(page.locator('h1')).toBeVisible();
      } else {
        // Skip if no talks exist
        test.skip();
      }
    });

    test('workshop detail page loads and displays content', async ({
      page,
    }) => {
      // Navigate to workshops page first to find a valid slug
      await page.goto('/workshops');

      // Find the first workshop link
      const firstWorkshopLink = page.locator('a[href^="/workshops/"]').first();
      const href = await firstWorkshopLink.getAttribute('href');

      if (href) {
        await page.goto(href);

        await expect(page.locator('h1')).toBeVisible();
      } else {
        // Skip if no workshops exist
        test.skip();
      }
    });
  });
});
