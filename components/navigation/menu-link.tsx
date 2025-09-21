'use client';

import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

import { useIsActivePathname } from '@/lib/hooks/use-is-active-pathname';
import { cn } from '@/lib/utils';

import { Link } from '../ui/link/link';

interface MenuLinkProps extends Omit<LinkProps, 'className'> {
  children: ReactNode;
}

export function MenuLink({ children, ...props }: MenuLinkProps) {
  const isActivePathname = useIsActivePathname(
    typeof props.href === 'object' ? (props.href.pathname ?? '/') : props.href,
  );
  const activeClasses =
    'bg-white/10 text-teal-700 md:border-slate-300/25 md:supports-[backdrop-filter]:backdrop-blur-md dark:bg-slate-950/10 dark:text-teal-200/75 dark:md:border-slate-500/25';
  const inactiveClasses =
    'text-slate-900/90 hover:text-teal-700/75 md:border-transparent dark:text-slate-200 dark:hover:text-teal-200/75';
  const classes = cn(
    isActivePathname ? activeClasses : inactiveClasses,
    'block py-3 transition focus-visible:ring-offset-2 focus-visible:transition-none md:rounded-full md:border md:px-4 md:py-1.5 md:active:scale-95',
  );

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}
