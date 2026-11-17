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

for (const viewport of [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]) {
  test('homepage cards and footer flow on ' + viewport.name, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    const cards = page.getByRole('region', {
      name: 'Writing, speaking, and teaching',
    });
    await expect(cards.getByRole('link')).toHaveCount(3);
    for (const card of [
      { title: 'Writing', href: '/posts', action: 'Read articles' },
      { title: 'Speaking', href: '/talks', action: 'Explore talks' },
      { title: 'Teaching', href: '/workshops', action: 'View workshops' },
    ]) {
      const link = cards.getByRole('link', {
        name: card.title,
        exact: true,
      });
      await expect(link).toHaveAttribute('href', card.href);
      await expect(
        link.getByRole('heading', { level: 2, name: card.title }),
      ).toBeVisible();
      await expect(link.locator('p')).toBeVisible();
      await expect(link).toContainText(card.action);
    }
    const [writing, speaking, teaching] = await Promise.all(
      (await cards.getByRole('link').all()).map((link) =>
        link.boundingBox(),
      ),
    );
    if (
      writing === null ||
      writing === undefined ||
      speaking === null ||
      speaking === undefined ||
      teaching === null ||
      teaching === undefined
    ) {
      throw new Error('Homepage cards are missing');
    }
    expect(Math.abs(writing.width - speaking.width)).toBeLessThan(2);
    expect(Math.abs(writing.width - teaching.width)).toBeLessThan(2);
    if (viewport.name === 'desktop') {
      expect(Math.abs(writing.y - speaking.y)).toBeLessThan(2);
      expect(Math.abs(writing.y - teaching.y)).toBeLessThan(2);
      expect(Math.abs(writing.height - speaking.height)).toBeLessThan(2);
      expect(Math.abs(writing.height - teaching.height)).toBeLessThan(2);
      expect(speaking.x).toBeGreaterThan(writing.x + writing.width);
      expect(teaching.x).toBeGreaterThan(speaking.x + speaking.width);
    } else {
      expect(Math.abs(writing.x - speaking.x)).toBeLessThan(2);
      expect(Math.abs(writing.x - teaching.x)).toBeLessThan(2);
      expect(speaking.y).toBeGreaterThan(writing.y + writing.height);
      expect(teaching.y).toBeGreaterThan(speaking.y + speaking.height);
    }
    const contact = page.getByRole('region', {
      name: 'Let’s build something together.',
    });
    await expect(contact.getByRole('link')).toHaveAttribute(
      'href',
      'mailto:glenn@glennreyes.com',
    );
    const beyond = page.getByRole('navigation', {
      name: 'Beyond the screen',
    });
    await expect(
      beyond.getByRole('link', { name: 'Freediving', exact: true }),
    ).toHaveAttribute('href', '/freediving');
    await expect(
      beyond.getByRole('link', { name: 'Running & HYROX', exact: true }),
    ).toHaveAttribute('href', '/sport');
    const contactBox = await contact.boundingBox();
    const beyondBox = await beyond.boundingBox();
    if (contactBox === null || beyondBox === null) {
      throw new Error('Footer sections are missing');
    }
    expect(contactBox.y).toBeGreaterThan(teaching.y + teaching.height);
    expect(beyondBox.y).toBeGreaterThan(contactBox.y + contactBox.height);
    await expect(page.locator('input[type="email"]')).toHaveCount(0);
    await expect(
      page.getByRole('button', { name: /subscribe/i }),
    ).toHaveCount(0);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      ),
    ).toBe(false);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
          .analyze()
      ).violations,
    ).toEqual([]);
  });
}

test('homepage cards support keyboard navigation', async ({ page }) => {
  await page.goto('/');
  const cards = page.getByRole('region', {
    name: 'Writing, speaking, and teaching',
  });
  const writing = cards.getByRole('link', { name: 'Writing', exact: true });
  await writing.focus();
  await expect(writing).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(
    cards.getByRole('link', { name: 'Speaking', exact: true }),
  ).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(
    cards.getByRole('link', { name: 'Teaching', exact: true }),
  ).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(
    page
      .getByRole('region', { name: 'Let’s build something together.' })
      .getByRole('link'),
  ).toBeFocused();
  await writing.press('Enter');
  await expect(page).toHaveURL(/\/posts$/);
});
