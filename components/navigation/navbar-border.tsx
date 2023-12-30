'use client';

import { useIsScrollTop } from '@/lib/hooks/use-is-scroll-top';
import clsx from 'clsx';

export function NavbarBorder() {
  const isScrollTop = useIsScrollTop();
  const classes = clsx(
    'absolute inset-x-0 top-full border-t transition',
    isScrollTop
      ? 'border-slate-50/0 dark:border-slate-500/0'
      : 'border-slate-300/25 dark:border-slate-500/25',
  );

  return <div className={classes} />;
}
