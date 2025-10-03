'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { useActionState, useEffect, useOptimistic } from 'react';
import { useFormStatus } from 'react-dom';
import { toast } from 'sonner';

import type { SubscribeState } from '@/app/subscribe/action';

import { subscribe } from '@/app/subscribe/action';
import { useTheme } from '@/lib/hooks/use-theme';

import { Button } from '../ui/forms/button';
import { Input } from '../ui/forms/input';

type NewsletterFormProps = Omit<
  ComponentPropsWithoutRef<'form'>,
  'children' | 'className'
>;

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" variant="input-button">
      {pending ? 'Subscribing...' : 'Subscribe'}
    </Button>
  );
};

export function NewsletterForm(props: NewsletterFormProps) {
  const { resolvedTheme } = useTheme();
  const [state, formAction] = useActionState<SubscribeState | null, FormData>(
    subscribe,
    null,
  );
  const [optimisticState, setOptimisticState] = useOptimistic<
    SubscribeState | null,
    'subscribing'
  >(state, (_currentState, _optimisticValue) => ({
    message: 'Subscribing...',
    status: 'idle',
  }));

  useEffect(() => {
    if (state?.status === 'success') {
      toast.success(state.message);
    } else if (state?.status === 'error') {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form
      action={(formData: FormData) => {
        setOptimisticState('subscribing');
        formAction(formData);
      }}
      className="grid gap-2 gap-y-4 sm:relative sm:flex sm:p-1"
      {...props}
    >
      <div className="sm:flex-1">
        <input name="theme" type="hidden" value={resolvedTheme} />
        <Input
          aria-label="Email address"
          className="peer relative z-10 w-full sm:border-transparent sm:focus:border-transparent sm:focus:ring-0 dark:bg-slate-900/25 dark:sm:border-transparent dark:sm:bg-transparent dark:sm:focus:border-transparent dark:sm:focus:ring-0"
          disabled={optimisticState?.status === 'idle'}
          name="email"
          placeholder="Your email address"
          required
          type="email"
        />
        <span className="absolute inset-0 hidden rounded-2xl border border-slate-300 p-1 peer-focus:border-slate-400 peer-focus:ring-4 peer-focus:ring-teal-100 peer-disabled:opacity-75 sm:block dark:border-slate-700 dark:bg-slate-900/25 dark:peer-focus:border-slate-500 dark:peer-focus:ring-teal-900/25" />
      </div>
      <div className="relative grid">
        <SubmitButton />
      </div>
    </form>
  );
}
