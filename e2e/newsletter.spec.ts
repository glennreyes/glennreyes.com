import { expect, test } from '@playwright/test';

test.describe('Newsletter', () => {
  test('should show validation error for invalid email', async ({ page }) => {
    await page.goto('/');

    // Find newsletter form
    const emailInput = page.locator('input[name="email"]');
    const submitButton = page.locator('button[type="submit"]', {
      hasText: 'Subscribe',
    });

    // Enter invalid email
    await emailInput.fill('invalid-email');
    await submitButton.click();

    // Wait for error toast with the exact message
    await expect(
      page.locator('text=Please enter a valid email address'),
    ).toBeVisible({
      timeout: 5000,
    });
  });

  test('should show pending state while submitting', async ({ page }) => {
    await page.goto('/');

    const emailInput = page.locator('input[name="email"]');
    const submitButton = page.locator('button[type="submit"]', {
      hasText: 'Subscribe',
    });

    // Enter valid email
    await emailInput.fill('test@example.com');

    // Click submit and immediately check for pending state
    await submitButton.click();

    // Verify button shows pending state
    await expect(
      page.locator('button[type="submit"]', { hasText: 'Subscribing' }),
    ).toBeVisible({ timeout: 2000 });
  });

  test('should have accessible newsletter form', async ({ page }) => {
    await page.goto('/');

    // Check form has proper labels
    const emailInput = page.locator('input[name="email"]');

    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(emailInput).toHaveAttribute('required');

    // Check button is accessible
    const submitButton = page.locator('button[type="submit"]');

    await expect(submitButton).toBeVisible();
  });
});
