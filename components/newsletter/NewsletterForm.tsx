'use client';

import { useTheme } from '@/hooks/useTheme';
import { useRouter } from 'next/navigation';
import type { ComponentPropsWithoutRef, FormEvent } from 'react';
import { useState, useTransition } from 'react';
import { Button } from '../ui/forms/Button';
import { Input } from '../ui/forms/Input';

type NewsletterFormProps = Omit<ComponentPropsWithoutRef<'form'>, 'children' | 'className'>;

export function NewsletterForm(props: NewsletterFormProps) {
  const { push } = useRouter();
  const { resolvedTheme } = useTheme();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');

    try {
      setIsFetching(true);
      await fetch('/subscribe', {
        body: JSON.stringify({ email, theme: resolvedTheme }),
        headers: { 'content-type': 'application/json' },
        method: 'post',
      });
      setIsFetching(false);
      startTransition(() => push('/subscribe/confirm'));
    } catch {
      setIsFetching(false);
      // TODO: Show error message
    }
  }

  return (
    <form className="grid gap-x-2 gap-y-4 sm:relative sm:flex sm:p-1" onSubmit={submit} {...props}>
      <div className="sm:flex-1">
        <Input
          aria-label="Email address"
          className="peer relative z-10 w-full dark:bg-slate-900/25 sm:border-transparent sm:focus:border-transparent sm:focus:ring-0 dark:sm:border-transparent dark:sm:bg-transparent dark:sm:focus:border-transparent dark:sm:focus:ring-0"
          disabled={isMutating}
          name="email"
          placeholder="Your email address"
          required
          type="email"
        />
        <span className="absolute inset-0 hidden rounded-[1.25rem] border border-slate-300 p-1 transition peer-focus:border-slate-400 peer-focus:ring-4 peer-focus:ring-teal-100 peer-disabled:opacity-75 dark:border-slate-700 dark:bg-slate-900/25 dark:peer-focus:border-slate-500 dark:peer-focus:ring-teal-900/25 sm:block" />
      </div>
      <div className="relative grid">
        <Button disabled={isMutating} type="submit">
          Subscribe
        </Button>
      </div>
    </form>
  );
}
