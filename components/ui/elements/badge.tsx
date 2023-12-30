import type { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';

type BadgeColors = 'rose' | 'sky' | 'slate' | 'teal';

const colors: Record<BadgeColors, string> = {
  rose: 'border-rose-200 bg-rose-50 text-rose-500 dark:border-rose-800/50 dark:bg-rose-950/50 dark:text-rose-500',
  sky: 'border-sky-200 bg-sky-50 text-sky-500 dark:border-sky-800/50 dark:bg-sky-950/50 dark:text-sky-500',
  slate:
    'border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800/50 dark:bg-slate-950/50 dark:text-slate-500',
  teal: 'border-teal-200 bg-teal-50 text-teal-500 dark:border-teal-800/50 dark:bg-teal-950/50 dark:text-teal-500',
};

interface BadgeProps
  extends Omit<ComponentPropsWithoutRef<'span'>, 'className'> {
  color?: BadgeColors;
}

export function Badge({ color = 'teal', ...props }: BadgeProps) {
  const classes = clsx(
    colors[color],
    'inline-flex items-center gap-1 rounded-full border px-2.5 py-1.5 text-[0.6875rem] font-semibold',
  );

  return <span className={classes} {...props} />;
}
