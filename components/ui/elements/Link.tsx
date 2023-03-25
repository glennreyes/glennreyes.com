import NextLink from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type LinkProps = ComponentPropsWithoutRef<typeof NextLink>;

export function Link({ className, ...props }: LinkProps) {
  const classes = twMerge('rounded-lg transition focus:outline-4 focus:outline-teal-300', className);

  if (props.href.toString().startsWith('http')) {
    return <NextLink className={classes} rel="noreferrer noopener" target="_blank" {...props} />;
  }

  return <NextLink className={classes} {...props} />;
}
