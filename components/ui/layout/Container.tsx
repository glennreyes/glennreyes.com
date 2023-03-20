import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

interface ContainerProps extends Omit<ComponentPropsWithoutRef<'section'>, 'className'> {
  width?: 'narrow' | 'wide';
}

const widths: Record<NonNullable<ContainerProps['width']>, string> = {
  narrow: 'max-w-screen-md',
  wide: 'container',
};

export function Container({ width = 'wide', ...props }: ContainerProps) {
  const classes = clsx(widths[width], 'mx-auto grid gap-12 px-4');

  return <section className={classes} {...props} />;
}
