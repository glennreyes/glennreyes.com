import { expect, test } from '@playwright/test';

test('loads styles, Geist, and freediving photos on the HTTP preview', async ({
  page,
}) => {
  await page.goto('/freediving');

  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toHaveCSS('font-size', '17px');
  const loadedFonts = await page.evaluate(async () => {
    await document.fonts.ready;
    return Array.from(document.fonts)
      .filter((face) => face.status === 'loaded')
      .map((face) => face.family);
  });
  expect(loadedFonts).toContain('Geist');

  const photo = page.getByRole('img', {
    name: /surrounded by a swirling school/,
  });
  await expect(photo).toBeVisible();
  await expect
    .poll(() =>
      photo.evaluate((element) =>
        element instanceof HTMLImageElement ? element.naturalWidth : 0,
      ),
    )
    .toBeGreaterThan(0);

  await page.setViewportSize({ width: 390, height: 844 });
  await page
    .getByRole('banner')
    .getByRole('link', { name: 'Tech', exact: true })
    .click();
  await expect(page).toHaveURL('/');
  const menu = page.getByRole('button', { name: 'Open Menu' });
  await menu.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toBeHidden();
  await expect(menu).toBeFocused();
});

test('restores theme choices and follows the system setting', async ({
  page,
}) => {
  await page.addInitScript(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'dark');
    }
  });
  await page.goto('/');
  const html = page.locator('html');
  await expect(html).toHaveAttribute('data-color-scheme', 'dark');
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  await expect(html).toHaveAttribute('data-color-scheme', 'light');
  await page.reload();
  await expect(html).toHaveAttribute('data-color-scheme', 'light');
  await expect(page.locator('body')).toHaveCSS(
    'background-color',
    'rgb(255, 255, 255)',
  );
  await page.getByRole('button', { name: 'Switch to system theme' }).click();
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(page.locator('body')).toHaveCSS(
    'background-color',
    'rgb(0, 0, 0)',
  );
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('body')).toHaveCSS(
    'background-color',
    'rgb(255, 255, 255)',
  );
});
