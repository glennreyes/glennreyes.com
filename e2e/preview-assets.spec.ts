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

  const photo = page.getByRole('img', { name: /floating between rock walls/ });
  await expect(photo).toBeVisible();
  await expect
    .poll(() =>
      photo.evaluate((element) =>
        element instanceof HTMLImageElement ? element.naturalWidth : 0,
      ),
    )
    .toBeGreaterThan(0);

  await page.getByRole('button', { name: /Below the surface/ }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
});
