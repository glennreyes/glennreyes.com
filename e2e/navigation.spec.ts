import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
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

  test('puts Tech first and swaps the primary links when switching chapters', async ({
    page,
  }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    const primary = nav.getByRole('list', { name: 'Chapter links' });
    const secondary = nav.getByRole('list', { name: 'Other chapters' });
    await expect(primary.getByRole('link')).toHaveText([
      'Posts',
      'Talks',
      'Workshops',
      'Appearances',
      'About',
    ]);
    await expect(secondary.getByRole('link')).toHaveText([
      'Freediving',
      'Running',
      'HYROX',
    ]);

    await secondary.getByRole('link', { name: 'Freediving' }).click();
    await expect(page).toHaveURL('/freediving');
    await expect(primary.getByRole('link')).toHaveText([
      'Freediving',
      'Gallery',
      'Unitydive',
    ]);
    await expect(
      primary.getByRole('link', { name: 'Freediving' }),
    ).toHaveAttribute('aria-current', 'page');
    await primary.getByRole('link', { name: 'Unitydive' }).click();
    await expect(page).toHaveURL('/freediving#unitydive');

    await secondary.getByRole('link', { name: 'Running' }).click();
    await expect(page).toHaveURL('/sport/running');
    await expect(primary.getByRole('link')).toHaveText([
      'Running',
      'Races',
      'Strava',
    ]);

    await secondary.getByRole('link', { name: 'HYROX' }).click();
    await expect(page).toHaveURL('/sport/hyrox');
    await expect(primary.getByRole('link')).toHaveText(['HYROX', 'Sessions']);

    await secondary.getByRole('link', { name: 'Tech' }).click();
    await expect(page).toHaveURL('/');
    await expect(primary.getByRole('link', { name: 'Posts' })).toBeVisible();
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
