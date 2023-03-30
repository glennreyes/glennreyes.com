'use client';

import clsx from 'clsx';
import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';
import { useIsActivePathname } from '~/hooks/useIsActivePathname';
import { Link } from '../ui/link/Link';

interface NavbarLinkProps extends Omit<LinkProps, 'className'> {
  children: ReactNode;
}

export function NavbarLink({ children, ...props }: NavbarLinkProps) {
  const isActivePathname = useIsActivePathname(props.href.toString());
  const classes = clsx(
    isActivePathname
      ? 'border-slate-100 bg-gradient-to-b from-transparent to-white/50 text-teal-700/90 supports-[backdrop-filter]:backdrop-blur-md'
      : 'border-transparent text-slate-800 hover:text-teal-700/90',
    'rounded-full border px-3 py-2 text-sm font-semibold tracking-tight transition active:scale-95',
  );

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}
