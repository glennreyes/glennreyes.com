import NextLink from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type LinkProps = ComponentPropsWithoutRef<typeof NextLink>;

export function Link({ className, ...props }: LinkProps) {
  const classes = twMerge('rounded-lg transition focus:outline-none focus:ring-4 focus:ring-teal-300', className);

  return <NextLink className={classes} {...props} />;
}
