'use client';

import clsx from 'clsx';
import { useIsScrollTop } from '~/hooks/useIsScrollTop';

export function NavbarBorder() {
  const isScrollTop = useIsScrollTop();
  const classes = clsx(
    'absolute inset-x-0 bottom-0 border-t transition',
    isScrollTop ? 'border-slate-50/0' : 'border-slate-50/50',
  );

  return <div className={classes} />;
}
