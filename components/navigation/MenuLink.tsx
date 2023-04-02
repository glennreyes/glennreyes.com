'use client';

import clsx from 'clsx';
import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';
import { useIsActivePathname } from '~/hooks/useIsActivePathname';
import { Link } from '../ui/link/Link';

interface MenuLinkProps extends Omit<LinkProps, 'className'> {
  children: ReactNode;
}

export function MenuLink({ children, ...props }: MenuLinkProps) {
  const isActivePathname = useIsActivePathname(props.href.toString());
  const classes = clsx(
    isActivePathname
      ? 'md:border-slate-100 bg-gradient-to-b from-transparent to-white/50 text-teal-700/90 supports-[backdrop-filter]:backdrop-blur-md'
      : 'md:border-transparent text-slate-800 hover:text-teal-700/90',
    'block md:rounded-full md:border md:px-4 py-3 text-sm font-semibold tracking-tight transition md:active:scale-95 focus-visible:ring-offset-2',
  );

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}
