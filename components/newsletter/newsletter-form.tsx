'use client';
import type { ComponentPropsWithoutRef } from 'react';
import { useActionState, useId } from 'react';
import type { SubscribeState } from '@/app/subscribe/action';
import { subscribe } from '@/app/subscribe/action';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/lib/hooks/use-theme';
type NewsletterFormProps = Omit<
  ComponentPropsWithoutRef<'form'>,
  'children' | 'className' | 'action'
>;
export function NewsletterForm(props: NewsletterFormProps) {
  const { resolvedTheme } = useTheme();
  const initialState: SubscribeState = { status: 'idle', message: '' };
  const [state, action, pending] = useActionState(subscribe, initialState);
  const statusId = useId();
  return (
    <form action={action} className="grid gap-4" {...props}>
      <input name="theme" type="hidden" value={resolvedTheme} />
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          aria-describedby={state.status !== 'idle' ? statusId : undefined}
          aria-invalid={state.status === 'error' ? true : undefined}
          aria-label="Email address"
          autoComplete="email"
          className="min-w-0 flex-1"
          name="email"
          placeholder="Your email address"
          required
          type="email"
        />
        <Button disabled={pending} type="submit">
          {pending ? 'Subscribing…' : 'Subscribe'}
        </Button>
      </div>
      <output aria-live="polite" id={statusId}>
        {state.message}
      </output>
    </form>
  );
}
