'use client';

import { useIsScrollTop } from '@/lib/hooks/use-is-scroll-top';
import { cn } from '@/lib/utils';

export function NavbarBorder() {
  const isScrollTop = useIsScrollTop();
  const classes = cn(
    'absolute inset-x-0 top-full border-t transition',
    isScrollTop
      ? 'border-gray-50/0 dark:border-gray-500/0'
      : 'border-gray-300/25 dark:border-gray-500/25',
  );

  return <div className={classes} />;
}
