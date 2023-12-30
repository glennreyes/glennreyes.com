'use client';

import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

import { useIsActivePathname } from '@/lib/hooks/use-is-active-pathname';
import clsx from 'clsx';

import { Link } from '../ui/link/link';

interface MenuLinkProps extends Omit<LinkProps, 'className'> {
  children: ReactNode;
}

export function MenuLink({ children, ...props }: MenuLinkProps) {
  const isActivePathname = useIsActivePathname(
    typeof props.href === 'object' ? props.href.pathname ?? '/' : props.href,
  );
  const classes = clsx(
    isActivePathname
      ? 'md:border-slate-300/25 dark:md:border-slate-500/25 text-teal-700 bg-white/10 dark:bg-slate-950/10 dark:text-teal-200/75 md:supports-[backdrop-filter]:backdrop-blur-md'
      : 'md:border-transparent text-slate-900/90 dark:text-slate-200 hover:text-teal-700/75 dark:hover:text-teal-200/75',
    'block md:rounded-full md:border md:px-4 py-3 text-sm font-semibold tracking-tight transition md:active:scale-95 focus-visible:ring-offset-2',
  );

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}
