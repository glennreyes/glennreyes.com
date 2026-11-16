import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

import { Link } from './link';

type InlineLinkProps = ComponentPropsWithoutRef<typeof Link>;

export function InlineLink({ className, ...props }: InlineLinkProps) {
  const classes = cn(
    'text-neutral-800 underline decoration-neutral-200 decoration-1 underline-offset-4 transition hover:text-neutral-950 hover:decoration-neutral-400 focus-visible:text-neutral-600 focus-visible:no-underline focus-visible:transition-none dark:text-neutral-200 dark:decoration-neutral-700 hover:dark:text-neutral-50 dark:hover:decoration-neutral-500',
    className,
  );

  return <Link className={classes} {...props} />;
}
