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
    for (const archive of ['appearances', 'posts', 'talks', 'workshops']) {
      test(`opens a detail page from /${archive}`, async ({ page }) => {
        await page.goto(`/${archive}`);
        const entry = page
          .getByRole('main')
          .locator(`h3 a[href^="/${archive}/"]`)
          .first();
        await expect(entry).toBeVisible();
        const title = await entry.innerText();
        await entry.click();
        await expect(page).toHaveURL(new RegExp(`/${archive}/[^/]+$`));
        await expect(page.getByRole('heading', { level: 1 })).toContainText(
          title,
        );
        if (archive === 'posts') {
          await expect(page.getByRole('article').first()).toBeVisible();
        }
      });
    }
  });

  test.describe('Seeded conference', () => {
    test.skip(
      process.env.PORTFOLIO_TEST_BUILD !== '1',
      'Uses the conference in the local test database.',
    );

    for (const archive of ['talks', 'workshops']) {
      test(`links an appearance to its ${archive} archive and back`, async ({
        page,
      }) => {
        const appearance = '/appearances/2026-03-dutch-ai-conference';
        await page.goto(appearance);
        const main = page.getByRole('main');
        const session = main.locator(`a[href^="/${archive}/"]`).first();
        await session.click();
        await expect(page).toHaveURL(new RegExp(`/${archive}/[^/]+$`));
        await main.locator(`a[href="${appearance}"]`).first().click();
        await expect(page).toHaveURL(appearance);
        await expect(main.getByRole('heading', { level: 1 })).toContainText(
          'Dutch AI Conference',
        );
      });
    }
  });
});
