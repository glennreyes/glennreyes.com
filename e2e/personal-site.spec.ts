import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = [
  '/freediving',
  '/sport',
  '/sport/running',
  '/sport/hyrox',
  '/tech',
  '/tech/ai',
];
for (const route of routes) {
  test('accessible chapter ' + route, async ({ page }) => {
    await page.goto(route);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
          .analyze()
      ).violations,
    ).toEqual([]);
  });
}
test('opens a film with controls, closes on escape, and returns focus', async ({
  page,
}) => {
  await page.goto('/freediving');
  const trigger = page.getByRole('button', {
    name: 'Open Napaling · August 2026: No fins. One breath.',
  });
  await trigger.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  const video = dialog.locator('video');
  await expect(video).toHaveAttribute('controls', '');
  await expect(video).toHaveAttribute('preload', 'none');
  await video.evaluate(async (element) => {
    if (!(element instanceof HTMLVideoElement)) {
      throw new Error('Missing video');
    }
    await element.play();
  });
  await expect
    .poll(() =>
      video.evaluate((element) =>
        element instanceof HTMLVideoElement ? element.currentTime : 0,
      ),
    )
    .toBeGreaterThan(0);
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});
test('maintains one font size, Geist, and no horizontal overflow on mobile', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of ['/', ...routes]) {
    await page.goto(route);
    const result = await page.locator('main').evaluate((element) => {
      const sizes = Array.from(
        element.querySelectorAll('h1,h2,h3,p,figcaption,a,button,input,span'),
      )
        .filter((node) => node.getClientRects().length > 0)
        .map((node) => window.getComputedStyle(node).fontSize);
      return {
        sizes: [...new Set(sizes)],
        font: window.getComputedStyle(element).fontFamily,
        overflow: document.documentElement.scrollWidth > window.innerWidth,
      };
    });
    expect(result.sizes).toEqual(['17px']);
    expect(result.font).toContain('Geist');
    expect(result.overflow).toBe(false);
  }
});
test('keeps the Tech chapter active for legacy speaking URLs', async ({
  page,
}) => {
  await page.goto('/talks');
  const work = page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Tech', exact: true });
  await expect(work).toHaveAttribute('aria-current', 'page');
});
test('dark themes retain accessible contrast', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('theme', 'dark');
  });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze()
    ).violations,
  ).toEqual([]);
});
