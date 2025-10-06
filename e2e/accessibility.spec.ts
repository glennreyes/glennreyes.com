import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('Accessibility', () => {
  test('home page should not have automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('about page should not have automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('/about');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('posts page should not have automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('/posts');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('talks page should not have automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('/talks');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('workshops page should not have automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('/workshops');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('mobile menu should be keyboard accessible', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 667 });

    const menuButton = page.getByRole('button', { name: 'Open Menu' });

    await menuButton.click();

    const dialog = page.getByRole('dialog');

    await expect(dialog).toBeVisible();

    await page.keyboard.press('Escape');

    await expect(dialog).not.toBeVisible();

    await expect(menuButton).toBeFocused();
  });

  test('mobile menu should trap focus', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 667 });

    await page.getByRole('button', { name: 'Open Menu' }).click();

    const dialog = page.getByRole('dialog');
    const firstLink = dialog.getByRole('link').first();
    const closeButton = page.getByRole('button', { name: 'Close Menu' });

    await expect(firstLink).toBeFocused();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    await expect(closeButton).toBeFocused();

    await page.keyboard.press('Tab');

    await expect(firstLink).toBeFocused();
  });

  test('skip to content link should work', async ({ page }) => {
    await page.goto('/');

    await page.keyboard.press('Tab');

    const skipLink = page.getByRole('link', { name: 'Skip to content' });

    await expect(skipLink).toBeFocused();

    await page.keyboard.press('Enter');

    const main = page.getByRole('main');

    await expect(main).toBeFocused();
  });
});
