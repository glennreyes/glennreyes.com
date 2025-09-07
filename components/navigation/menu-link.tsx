'use client';

import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

import clsx from 'clsx';

import { useIsActivePathname } from '@/lib/hooks/use-is-active-pathname';

import { Link } from '../ui/link/link';

interface MenuLinkProps extends Omit<LinkProps, 'className'> {
  children: ReactNode;
}

export const MenuLink = ({ children, ...props }: MenuLinkProps) => {
  const isActivePathname = useIsActivePathname(
    typeof props.href === 'object' ? props.href.pathname ?? '/' : props.href,
  );
  const classes = clsx(
    isActivePathname
      ? 'bg-white/10 text-teal-700 md:border-slate-300/25 md:supports-[backdrop-filter]:backdrop-blur-md dark:bg-slate-950/10 dark:text-teal-200/75 dark:md:border-slate-500/25'
      : 'text-slate-900/90 hover:text-teal-700/75 md:border-transparent dark:text-slate-200 dark:hover:text-teal-200/75',
    'block py-3 text-sm font-semibold tracking-tight transition focus-visible:ring-offset-2 md:rounded-full md:border md:px-4 md:active:scale-95',
  );

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
};
