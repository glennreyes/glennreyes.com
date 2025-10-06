import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';

import { NewsletterForm } from './newsletter-form';

vi.mock('@/app/subscribe/action', () => ({
  subscribe: vi.fn(),
}));

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock('@/lib/hooks/use-theme', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

describe('NewsletterForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders email input with required and email type', () => {
    render(<NewsletterForm />);

    const emailInput = screen.getByPlaceholderText('Your email address');

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('required');
    expect(emailInput).toHaveAttribute('name', 'email');
  });

  it('renders submit button', () => {
    render(<NewsletterForm />);

    const submitButton = screen.getByRole('button', { name: 'Subscribe' });

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  it('includes hidden theme input', () => {
    const { container } = render(<NewsletterForm />);
    const themeInput = container.querySelector('input[name="theme"]');

    expect(themeInput).toBeInTheDocument();
    expect(themeInput).toHaveAttribute('type', 'hidden');
    expect(themeInput).toHaveAttribute('value', 'light');
  });

  it('email input has proper aria-label', () => {
    render(<NewsletterForm />);

    const emailInput = screen.getByLabelText('Email address');

    expect(emailInput).toBeInTheDocument();
  });

  it('renders form with proper action', () => {
    const { container } = render(<NewsletterForm />);
    const form = container.querySelector('form');

    expect(form).toBeInTheDocument();
  });
});
