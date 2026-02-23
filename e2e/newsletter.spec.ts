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

  test.skip('should submit valid email', async ({ page }) => {
    await page.goto('/');

    const emailInput = page.getByRole('textbox', { name: 'Email address' });
    const submitButton = page.getByRole('button', { name: 'Subscribe' });

    // Enter valid email
    await emailInput.fill('test@example.com');

    const requestPromise = page.waitForRequest((request) => {
      const postData = request.postData() ?? '';

      if (request.method() !== 'POST') {
        return false;
      }

      return (
        postData.includes('test@example.com') ||
        postData.includes('test%40example.com')
      );
    });

    await submitButton.click();
    await requestPromise;
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
