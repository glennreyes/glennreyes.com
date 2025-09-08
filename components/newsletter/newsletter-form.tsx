'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { useFormStatus } from 'react-dom';

import { subscribe } from '@/app/subscribe/action';
import { useTheme } from '@/lib/hooks/use-theme';

import { Button } from '../ui/forms/button';
import { Input } from '../ui/forms/input';

type NewsletterFormProps = Omit<
  ComponentPropsWithoutRef<'form'>,
  'children' | 'className'
>;

export const NewsletterForm = (props: NewsletterFormProps) => {
  const { resolvedTheme } = useTheme();
  const { pending } = useFormStatus();

  return (
    <form
      action={subscribe}
      className="grid gap-2 gap-y-4 sm:relative sm:flex sm:p-1"
      {...props}
    >
      <div className="sm:flex-1">
        <input name="theme" type="hidden" value={resolvedTheme} />
        <Input
          aria-label="Email address"
          className="peer relative z-10 w-full sm:border-transparent sm:focus:border-transparent sm:focus:ring-0 dark:bg-slate-900/25 dark:sm:border-transparent dark:sm:bg-transparent dark:sm:focus:border-transparent dark:sm:focus:ring-0"
          disabled={pending}
          name="email"
          placeholder="Your email address"
          required
          type="email"
        />
        <span className="absolute inset-0 hidden rounded-2xl border border-slate-300 p-1 peer-focus:border-slate-400 peer-focus:ring-4 peer-focus:ring-teal-100 peer-disabled:opacity-75 sm:block dark:border-slate-700 dark:bg-slate-900/25 dark:peer-focus:border-slate-500 dark:peer-focus:ring-teal-900/25" />
      </div>
      <div className="relative grid">
        <Button disabled={pending} type="submit" variant="input-button">
          Subscribe
        </Button>
      </div>
    </form>
  );
};
