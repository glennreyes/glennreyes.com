import { expect, test } from '@playwright/test';

test('the whole header becomes a centered glass pill after scrolling', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  const header = page.getByRole('banner');
  const glass = header.locator('.nav-glass');
  const brand = header.getByRole('link', { name: 'Glenn Reyes, home' });
  await expect(header).toHaveAttribute('data-scrolled', 'false');
  await expect(glass).toHaveCSS('opacity', '0');
  const initialBrand = await brand.boundingBox();
  await page.mouse.move(720, 450);
  await page.mouse.wheel(0, 600);
  await expect(header).toHaveAttribute('data-scrolled', 'true');
  await expect(glass).toHaveCSS('opacity', '1');
  await expect
    .poll(async () => (await brand.boundingBox())?.x ?? 0)
    .toBeGreaterThan((initialBrand?.x ?? 0) + 10);
  const pill = await glass.boundingBox();
  if (!pill) {
    throw new Error('The glass pill is missing');
  }
  expect(Math.abs(pill.x + pill.width / 2 - 720)).toBeLessThan(2);
  await expect(brand).toBeVisible();
  await expect(
    header.getByRole('link', { name: 'Projects', exact: true }),
  ).toBeVisible();
  await page.mouse.wheel(0, -2000);
  await expect(header).toHaveAttribute('data-scrolled', 'false');
  await expect(glass).toHaveCSS('opacity', '0');
});

test('mobile glass navigation preserves the direct Tech link with reduced motion', async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/freediving');
  await page.mouse.move(185, 400);
  await page.mouse.wheel(0, 400);
  const header = page.getByRole('banner');
  await expect(header).toHaveAttribute('data-scrolled', 'true');
  await expect(
    header.getByRole('link', { name: 'Tech', exact: true }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await header.getByRole('link', { name: 'Tech', exact: true }).click();
  await expect(page).toHaveURL('/');
});

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
    name: /above a school of jacks/,
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
