import { expect, test } from '@playwright/test';

test.describe('Newsletter retirement', () => {
  test('home and article pages no longer offer email signup', async ({
    page,
  }) => {
    await page.goto('/');

    await expect(
      page.getByRole('textbox', { name: 'Email address' }),
    ).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Subscribe' })).toHaveCount(
      0,
    );

    await page.goto('/posts/mcp-explained');

    await expect(page.locator('article')).toBeVisible();
    await expect(
      page.getByRole('textbox', { name: 'Email address' }),
    ).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Subscribe' })).toHaveCount(
      0,
    );
  });

  for (const path of ['/subscribe/confirm', '/subscribe/thank-you']) {
    test(`${path} no longer advertises a subscription`, async ({ request }) => {
      const response = await request.get(path);

      expect(response.status()).toBe(404);
    });
  }
});
