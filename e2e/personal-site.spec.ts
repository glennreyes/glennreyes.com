import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = [
  '/freediving',
  '/sport',
  '/sport/running',
  '/sport/hyrox',
  '/tech/ai',
  '/projects',
  '/speaking',
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
test('personal chapters show launch previews without unfinished sections', async ({
  page,
}) => {
  for (const route of [
    '/freediving',
    '/sport',
    '/sport/running',
    '/sport/hyrox',
  ]) {
    await page.goto(route);
    await expect(
      page.getByText('More of this side of me, soon.'),
    ).toBeVisible();
    await expect(page.getByRole('main').getByRole('img')).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      /noindex/,
    );
    await expect(
      page.getByRole('heading', { name: 'Gallery', exact: true }),
    ).toHaveCount(0);
    await expect(page.locator('video')).toHaveCount(0);
  }
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
test('keeps Speaking current on a talk detail page', async ({ page }) => {
  await page.goto('/talks/ui-that-builds-itself');
  const talks = page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Speaking', exact: true });
  await expect(talks).toHaveAttribute('aria-current', 'location');
});
test('dark themes retain accessible contrast', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('theme', 'dark');
  });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute(
    'data-color-scheme',
    'dark',
  );
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze()
    ).violations,
  ).toEqual([]);
});

test('project hover fills the card and All posts follows the writing list', async ({
  page,
}) => {
  await page.goto('/');
  const card = page
    .getByRole('main')
    .getByRole('link', { name: /Tuner Sound/ });
  await expect(card.locator('svg')).toHaveCount(0);
  const resting = await card.evaluate(
    (element) => getComputedStyle(element).backgroundColor,
  );
  await card.hover();
  await expect
    .poll(() =>
      card.evaluate((element) => getComputedStyle(element).backgroundColor),
    )
    .not.toBe(resting);
  const writing = page.getByRole('heading', { name: 'Writing', exact: true });
  const more = page.getByRole('link', { name: 'All posts', exact: true });
  const lastPost = page
    .getByRole('main')
    .getByRole('link', { name: 'From Screens to Intent', exact: true });
  const boxes = await Promise.all([
    writing.boundingBox(),
    more.boundingBox(),
    lastPost.boundingBox(),
  ]);
  const [headingBox, moreBox, postBox] = boxes;
  if (!headingBox || !moreBox || !postBox) {
    throw new Error('Writing layout is missing');
  }
  expect(moreBox.y).toBeGreaterThan(postBox.y + postBox.height);
  expect(Math.abs(moreBox.x + 12.75 - headingBox.x)).toBeLessThan(2);
});
