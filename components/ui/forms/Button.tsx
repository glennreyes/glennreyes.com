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

type ButtonProps = ButtonAsLinkProps | ButtonDefaultProps;

export function Button({ appearance = 'primary', ...props }: ButtonProps) {
  const appearances = {
    primary: 'bg-stone-800 text-stone-100 hover:bg-stone-700',
    secondary: 'border border-stone-300 text-stone-600 hover:border-stone-400 hover:text-stone-700',
  };
  const classes = clsx(
    appearances[appearance],
    'rounded-2xl p-4 text-center text-sm font-medium leading-none transition',
  );

  if (props.as === 'link') {
    const { as, ...rest } = props;

    return <Link className={classes} {...rest} />;
  }

  return <button className={classes} {...props} />;
}
