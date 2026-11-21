import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test('slides the current highlight between primary links', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.goto('/posts');
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    const posts = nav.getByRole('link', { name: 'Posts' });
    const about = nav.getByRole('link', { name: 'About' });
    await expect(posts).toHaveAttribute('aria-current', 'page');

    const previousRight = await posts.evaluate(
      (link) => link.getBoundingClientRect().right,
    );
    await Promise.all([
      page.waitForFunction((start) => {
        const link = document.querySelector(
          'header a[href="/about"][aria-current="page"]',
        );
        const highlight = link?.querySelector('[aria-hidden="true"]');
        if (!link || !highlight) {
          return false;
        }
        const { left } = highlight.getBoundingClientRect();
        return left > start && left < link.getBoundingClientRect().left - 1;
      }, previousRight),
      about.press('Enter'),
    ]);
    await expect
      .poll(() =>
        about.evaluate((link) => {
          const highlight = link.querySelector('[aria-hidden="true"]');
          return (
            highlight?.getBoundingClientRect().left ===
            link.getBoundingClientRect().left
          );
        }),
      )
      .toBe(true);
  });

  test('should navigate from home to about page', async ({ page }) => {
    await page.goto('/');

    // Click on About link in navigation
    await page.getByRole('link', { name: 'About', exact: true }).click();

    // Wait for navigation
    await page.waitForURL('/about');

    // Verify we're on the about page
    await expect(page).toHaveURL('/about');
    await expect(
      page.getByRole('heading', { level: 1, name: /Hey, I.m Glenn Reyes/i }),
    ).toBeVisible();
  });

  test('should navigate back to home by clicking the name', async ({
    page,
  }) => {
    await page.goto('/about');

    // Click avatar/logo link in navbar to go home
    await page
      .getByRole('banner')
      .getByRole('link', { name: 'Glenn Reyes' })
      .click();

    // Wait for navigation
    await page.waitForURL('/');

    // Verify we're on the home page
    await expect(page).toHaveURL('/');
  });

  test('groups Tech navigation and keeps personal chapters discoverable', async ({
    page,
  }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    const primary = nav.getByRole('list', { name: 'Chapter links' });
    const secondary = nav.getByRole('list', { name: 'Other chapters' });
    await expect(primary.getByRole('link')).toHaveText([
      'Posts',
      'Projects',
      'Speaking',
      'About',
    ]);
    await expect(secondary.getByRole('link')).toHaveText([
      'Freediving',
      'Running & fitness',
    ]);
    await primary.getByRole('link', { name: 'Speaking' }).click();
    await expect(page).toHaveURL('/speaking');
    for (const name of ['Talks & recordings', 'Workshops', 'Appearances']) {
      await expect(
        page.getByRole('main').getByRole('link', { name, exact: false }),
      ).toBeVisible();
    }
    await secondary.getByRole('link', { name: 'Freediving' }).click();
    await expect(page).toHaveURL('/freediving');
    await expect(primary.getByRole('link')).toHaveText(['Freediving']);
    await expect(
      primary.getByRole('link', { name: 'Freediving' }),
    ).toHaveAttribute('aria-current', 'page');
    await secondary.getByRole('link', { name: 'Running & fitness' }).click();
    await expect(page).toHaveURL('/sport');
    await expect(primary.getByRole('link')).toHaveText(['Running & fitness']);
    await secondary.getByRole('link', { name: 'Tech', exact: true }).click();
    await expect(page).toHaveURL('/');
  });

  test('returns to Tech on mobile without opening a menu', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    for (const route of [
      '/freediving',
      '/sport',
      '/sport/running',
      '/sport/hyrox',
    ]) {
      await page.goto(route);
      await expect(page.getByRole('dialog')).toBeHidden();
      const tech = page
        .getByRole('banner')
        .getByRole('link', { name: 'Tech', exact: true });
      await expect(tech).toBeVisible();
      await tech.click();
      await expect(page).toHaveURL('/');
    }
  });

  test('switches chapters and dismisses the menu on a phone', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const menu = page.getByRole('button', { name: 'Open Menu' });
    const dialog = page.getByRole('dialog');
    await menu.click();
    await expect(dialog.getByRole('heading', { name: 'Tech' })).toBeVisible();
    await dialog.getByRole('link', { name: 'Freediving' }).click();
    await expect(page).toHaveURL('/freediving');
    await expect(dialog).toBeHidden();

    await menu.click();
    await expect(
      dialog.getByRole('heading', { name: 'Freediving' }),
    ).toBeVisible();
    await dialog.getByRole('link', { name: 'Tech' }).click();
    await expect(page).toHaveURL('/');
    await expect(dialog).toBeHidden();
  });
});
