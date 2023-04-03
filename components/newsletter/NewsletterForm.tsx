'use client';

import { useRouter } from 'next/navigation';
import type { ComponentPropsWithoutRef, FormEventHandler } from 'react';
import { useState, useCallback, useTransition } from 'react';
import { Button } from '../ui/forms/Button';
import { Input } from '../ui/forms/Input';

type NewsletterFormProps = Omit<ComponentPropsWithoutRef<'form'>, 'children' | 'className'>;

export function NewsletterForm(props: NewsletterFormProps) {
  const { push } = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;
  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get('email');

      try {
        setIsFetching(true);
        await fetch('/subscribe', {
          body: JSON.stringify({ email }),
          headers: { 'Content-Type': 'application/json' },
          method: 'post',
        });
        setIsFetching(false);
        startTransition(() => push('/subscribe/confirm'));
      } catch {
        setIsFetching(false);
        // TODO: Show error message
      }
    },
    [push],
  );

  return (
    <form className="grid gap-x-2 gap-y-4 sm:relative sm:flex sm:p-1" onSubmit={handleSubmit} {...props}>
      <div className="sm:flex-1">
        <Input
          aria-label="Email address"
          className="peer relative z-10 w-full dark:bg-slate-900 sm:border-transparent sm:focus:border-transparent sm:focus:ring-0"
          disabled={isMutating}
          name="email"
          placeholder="Your email address"
          required
          type="email"
        />
        <span className="absolute inset-0 hidden rounded-[1.25rem] border border-slate-300 p-1 text-slate-800 transition peer-focus:border-slate-400 peer-focus:ring-4 peer-focus:ring-teal-100 peer-disabled:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:peer-focus:border-slate-600 dark:peer-focus:ring-teal-900/25 sm:block" />
      </div>
      <div className="relative grid">
        <Button disabled={isMutating} type="submit">
          Subscribe
        </Button>
      </div>
    </form>
  );
}
