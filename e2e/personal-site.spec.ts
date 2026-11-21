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

test('project hover fills the card', async ({ page }) => {
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
});

test('homepage cards form one row on desktop and stack on mobile', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/');

  const main = page.getByRole('main');
  const writing = main.getByRole('link', { name: /^Writing / });
  const speaking = main.getByRole('link', { name: /^Speaking / });
  const teaching = main.getByRole('link', { name: /^Teaching / });

  for (const [card, title, href] of [
    [writing, 'Writing', '/posts'],
    [speaking, 'Speaking', '/speaking'],
    [teaching, 'Teaching', '/workshops'],
  ] as const) {
    await expect(card).toHaveAttribute('href', href);
    await expect(card.getByRole('heading', { name: title })).toBeVisible();
    await expect(card.locator('p')).not.toBeEmpty();
  }

  const desktopBoxes = await Promise.all([
    writing.boundingBox(),
    speaking.boundingBox(),
    teaching.boundingBox(),
  ]);
  const [first, second, third] = desktopBoxes;
  if (!first || !second || !third) {
    throw new Error('Homepage cards are missing');
  }
  expect(Math.abs(first.y - second.y)).toBeLessThan(2);
  expect(Math.abs(second.y - third.y)).toBeLessThan(2);

  await page.setViewportSize({ width: 390, height: 844 });
  const mobileBoxes = await Promise.all([
    writing.boundingBox(),
    speaking.boundingBox(),
    teaching.boundingBox(),
  ]);
  const [firstMobile, secondMobile, thirdMobile] = mobileBoxes;
  if (!firstMobile || !secondMobile || !thirdMobile) {
    throw new Error('Mobile homepage cards are missing');
  }
  expect(secondMobile.y).toBeGreaterThan(firstMobile.y + firstMobile.height - 2);
  expect(thirdMobile.y).toBeGreaterThan(
    secondMobile.y + secondMobile.height - 2,
  );
});

test('homepage ends with contact, then subtle personal links', async ({
  page,
}) => {
  await page.goto('/');
  const footer = page.getByRole('contentinfo');
  await expect(
    footer.getByRole('heading', { name: 'Let’s build something together.' }),
  ).toBeVisible();
  await expect(
    footer.getByRole('link', { name: 'glenn@glennreyes.com' }),
  ).toHaveAttribute('href', 'mailto:glenn@glennreyes.com');
  await expect(
    footer.getByRole('link', { name: 'Freediving' }),
  ).toHaveAttribute('href', '/freediving');
  await expect(
    footer.getByRole('link', { name: 'Running & HYROX' }),
  ).toHaveAttribute('href', '/sport');
  await expect(
    page.getByRole('main').getByRole('link', { name: 'All posts' }),
  ).toHaveCount(0);
});
