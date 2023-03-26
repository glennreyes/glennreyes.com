import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

type BadgeColors = 'rose' | 'sky' | 'stone' | 'teal';

const colors: Record<BadgeColors, string> = {
  rose: 'border-rose-300 bg-rose-50 text-rose-500',
  sky: 'border-sky-300 bg-sky-50 text-sky-500',
  stone: 'border-stone-300 bg-stone-50 text-stone-500',
  teal: 'border-teal-300 bg-teal-50 text-teal-500',
};

interface BadgeProps extends Omit<ComponentPropsWithoutRef<'span'>, 'className'> {
  color?: BadgeColors;
}

export function Badge({ color = 'teal', ...props }: BadgeProps) {
  const classes = clsx(
    colors[color],
    'inline-flex items-center gap-1 rounded-full border py-1.5 px-2.5 text-[0.625rem] font-semibold',
  );

  return <span className={classes} {...props} />;
}
