import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type H1Props = ComponentPropsWithoutRef<'h1'>;

export function H1({ children, className, ...props }: H1Props) {
  const classes = twMerge(
    'text-4xl/tight sm:text-5xl/tight font-extrabold tracking-tighter',
    className,
  );

  return (
    <h1 className={classes} {...props}>
      <span className="inline-block bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text pr-2 text-transparent dark:from-slate-50 dark:to-slate-400">
        {children}
      </span>
    </h1>
  );
}
