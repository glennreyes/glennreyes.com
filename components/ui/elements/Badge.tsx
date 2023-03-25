import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

type BadgeColors = 'teal';

const colors: Record<BadgeColors, string> = {
  teal: 'border-teal-300 bg-teal-50 text-teal-500',
};

interface BadgeProps extends Omit<ComponentPropsWithoutRef<'span'>, 'className'> {
  color?: BadgeColors;
}

export function Badge({ color = 'teal', ...props }: BadgeProps) {
  const classes = clsx(colors[color], 'rounded-full border py-1.5 px-2.5 text-[0.625rem] font-semibold');

  return <span className={classes} {...props} />;
}
