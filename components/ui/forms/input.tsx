import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type InputProps = ComponentPropsWithoutRef<'input'>;

export function Input({ className, ...props }: InputProps) {
  const classes = cn(
    'rounded-xl border border-gray-300 px-5 py-3 text-start font-medium text-gray-800 placeholder:text-gray-300 focus-visible:border-gray-400 focus-visible:text-gray-700 focus-visible:ring-4 focus-visible:ring-teal-100 disabled:opacity-75 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus-visible:border-gray-500 dark:focus-visible:ring-teal-900/25',
    className,
  );

  return <input className={classes} {...props} />;
}
