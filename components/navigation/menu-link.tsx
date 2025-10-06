'use client';

import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

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
  const activeClasses = 'text-teal-700 dark:text-teal-200/75';
  const inactiveClasses =
    'text-gray-900/90 hover:text-teal-700/75 dark:text-gray-200 dark:hover:text-teal-200/75';
  const classes = cn(
    isActivePathname ? activeClasses : inactiveClasses,
    'relative block min-h-11 px-4 py-3 transition focus-visible:ring-offset-2 focus-visible:transition-none md:min-h-0 md:rounded-full md:py-2 md:active:scale-95',
  );

  return (
    <Link
      aria-current={isActivePathname ? 'page' : undefined}
      className={classes}
      prefetch={false}
      {...props}
    >
      {isActivePathname && (
        <motion.span
          className="absolute inset-x-0 inset-y-0 z-0 rounded-full border border-gray-300/25 bg-white/10 backdrop-blur-md md:inset-x-1 dark:border-gray-500/25 dark:bg-black/10"
          layoutId="active-nav-pill"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
