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
      'border border-slate-800 bg-slate-800 text-slate-100 hover:border-slate-700 hover:bg-slate-700 focus:text-slate-100 active:border-slate-600 active:bg-slate-600',
    secondary:
      'border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-800 focus:text-slate-800 active:border-slate-500 active:text-slate-950',
  };
  const classes = clsx(
    appearances[appearance],
    'rounded-2xl px-5 py-3 text-sm font-semibold tracking-tight transition focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 active:scale-95 disabled:opacity-75',
  );

  if (props.as === 'link') {
    const { as, ...rest } = props;
    const linkClasses = clsx(classes, 'text-center');

    return <Link className={linkClasses} {...rest} />;
  }

  return <button className={classes} type="submit" {...props} />;
}
