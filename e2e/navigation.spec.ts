import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';
import { instant } from '@next/playwright';

function mainNav(page: Page) {
  return page.getByRole('navigation', { name: 'Main navigation' });
}

test.describe('Navigation', () => {
  test('should navigate from home to about page', async ({ page }) => {
    await page.goto('/');

    await mainNav(page)
      .getByRole('link', { name: 'About', exact: true })
      .click();

    await page.waitForURL('/about');

    await expect(page).toHaveURL('/about');
    await expect(
      page.getByRole('heading', { level: 1, name: /Glenn Reyes/i }),
    ).toBeVisible();
  });

  test('about heading is available immediately during navigation', async ({
    page,
  }) => {
    await page.goto('/');

    await instant(page, async () => {
      await mainNav(page)
        .getByRole('link', { name: 'About', exact: true })
        .click();
      await page.waitForURL('/about');
      await expect(
        page.getByRole('heading', { level: 1, name: /Glenn Reyes/i }),
      ).toBeVisible();
    });
  });

  test('posts heading is available immediately during navigation', async ({
    page,
  }) => {
    await page.goto('/');

    await instant(page, async () => {
      await mainNav(page)
        .getByRole('link', { name: 'Posts', exact: true })
        .click();
      await page.waitForURL('/posts');
      await expect(
        page.getByRole('heading', {
          level: 1,
          name: /Writing on code and life/i,
        }),
      ).toBeVisible();
    });
  });

  test('should navigate back to home by clicking avatar', async ({ page }) => {
    await page.goto('/about');

    await page
      .getByRole('banner')
      .getByRole('link', { name: 'Glenn Reyes' })
      .click();

    await page.waitForURL('/');

    await expect(page).toHaveURL('/');
  });

  test('should have working navigation menu', async ({ page }) => {
    await page.goto('/');

    const navLinks = ['About', 'Posts', 'Talks', 'Workshops'];
    const nav = mainNav(page);

    for (const linkName of navLinks) {
      await expect(
        nav.getByRole('link', { name: linkName, exact: true }),
      ).toBeVisible();
    }
  });
});
