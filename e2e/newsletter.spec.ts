import { expect, test } from '@playwright/test';

test.describe('Newsletter', () => {
  test('should validate email input', async ({ page }) => {
    await page.goto('/');

    // Find newsletter form
    const emailInput = page.getByRole('textbox', { name: 'Email address' });

    // Verify email input has proper validation attributes
    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(emailInput).toHaveAttribute('required');

    // Fill with invalid email to test validation
    await emailInput.fill('invalid-email');

    // The browser's built-in validation should prevent submission
    // or the form should show an error message
    const submitButton = page.getByRole('button', { name: 'Subscribe' });

    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  });

  test('should show pending state while submitting', async ({ page }) => {
    await page.goto('/');

    const emailInput = page.getByRole('textbox', { name: 'Email address' });
    const submitButton = page.getByRole('button', { name: 'Subscribe' });

    // Enter valid email
    await emailInput.fill('test@example.com');

    // Click submit and immediately check for pending state
    await submitButton.click();

    // Verify button shows pending state
    await expect(
      page.getByRole('button', { name: 'Subscribing...' }),
    ).toBeVisible({ timeout: 2000 });
  });

  test('should have accessible newsletter form', async ({ page }) => {
    await page.goto('/');

    // Check form has proper labels and accessible inputs
    const emailInput = page.getByRole('textbox', { name: 'Email address' });

    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(emailInput).toHaveAttribute('required');

    // Check button is accessible
    const submitButton = page.getByRole('button', { name: 'Subscribe' });

    await expect(submitButton).toBeVisible();
  });
});
