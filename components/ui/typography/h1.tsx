import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type H1Props = ComponentPropsWithoutRef<'h1'>;

export function H1({ children, className, ...props }: H1Props) {
  const classes = cn('font-medium', className);

  return (
    <h1 className={classes} {...props}>
      <span className="inline-block bg-gradient-to-r from-black to-gray-600 bg-clip-text pr-2 text-transparent dark:from-white dark:to-gray-400">
        {children}
      </span>
    </h1>
  );
}
