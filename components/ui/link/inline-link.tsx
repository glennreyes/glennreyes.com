import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Link } from './link2';

type InlineLinkProps = ComponentPropsWithoutRef<typeof Link>;

export function InlineLink({ className, ...props }: InlineLinkProps) {
  const classes = twMerge(
    'text-slate-800 underline decoration-teal-200 decoration-1 underline-offset-4 transition hover:text-slate-950 hover:decoration-teal-400 focus-visible:text-slate-600 focus-visible:no-underline dark:text-slate-200 dark:decoration-teal-700 hover:dark:text-slate-50 dark:hover:decoration-teal-500',
    className,
  );

  return <Link className={classes} {...props} />;
}
