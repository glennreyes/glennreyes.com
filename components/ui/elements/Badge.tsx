import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

type BadgeColors = 'rose' | 'sky' | 'slate' | 'teal';

const colors: Record<BadgeColors, string> = {
  rose: 'border-rose-200 bg-rose-50 text-rose-500',
  sky: 'border-sky-200 bg-sky-50 text-sky-500',
  slate: 'border-slate-200 bg-slate-50 text-slate-500',
  teal: 'border-teal-200 bg-teal-50 text-teal-500',
};

interface BadgeProps extends Omit<ComponentPropsWithoutRef<'span'>, 'className'> {
  color?: BadgeColors;
}

export function Badge({ color = 'teal', ...props }: BadgeProps) {
  const classes = clsx(
    colors[color],
    'inline-flex items-center gap-1 rounded-full border py-1.5 px-2.5 text-[0.6875rem] font-semibold',
  );

  return <span className={classes} {...props} />;
}
