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
    primary:
      'border border-stone-800 bg-stone-800 text-stone-100 hover:border-stone-700 hover:bg-stone-700 focus:text-stone-100 active:border-stone-600 active:bg-stone-600',
    secondary:
      'border border-stone-300 text-stone-700 hover:border-stone-400 hover:text-stone-800 focus:text-stone-800 active:border-stone-500 active:text-stone-900',
  };
  const classes = clsx(
    appearances[appearance],
    'rounded-2xl py-3 px-5 text-sm font-medium transition focus:border-stone-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 disabled:opacity-75',
  );

  if (props.as === 'link') {
    const { as, ...rest } = props;
    const linkClasses = clsx(classes, 'text-center');

    return <Link className={linkClasses} {...rest} />;
  }

  return <button className={classes} type="submit" {...props} />;
}
