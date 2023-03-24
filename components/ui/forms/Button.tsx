import clsx from 'clsx';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

interface ButtonBaseProps {
  appearance?: 'primary' | 'secondary';
}

interface ButtonDefaultProps extends ButtonBaseProps, Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
  as?: 'button';
}

interface ButtonAsLinkProps extends ButtonBaseProps, Omit<ComponentPropsWithoutRef<typeof Link>, 'as' | 'className'> {
  as: 'link';
}

export type ButtonProps = ButtonAsLinkProps | ButtonDefaultProps;

export function Button({ appearance = 'primary', ...props }: ButtonProps) {
  const appearances = {
    primary: 'bg-stone-800 text-stone-100 focus:bg-stone-700 focus:text-stone-100 hover:bg-stone-700',
    secondary:
      'border border-stone-300 text-stone-700 focus:text-stone-800 hover:border-stone-400 hover:text-stone-800',
  };
  const classes = clsx(
    appearances[appearance],
    'rounded-2xl py-3 px-5 text-sm font-medium transition focus:border-stone-400 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-teal-300',
  );

  if (props.as === 'link') {
    const { as, ...rest } = props;
    const linkClasses = clsx(classes, 'text-center');

    return <Link className={linkClasses} {...rest} />;
  }

  return <button className={classes} type="submit" {...props} />;
}
