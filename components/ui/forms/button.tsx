import type { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

type ButtonAppearance = 'primary' | 'secondary';

const appearances: Record<ButtonAppearance, string> = {
  primary:
    'border-slate-800 bg-slate-800 text-slate-100 hover:border-slate-700 hover:bg-slate-700 active:border-slate-800 active:bg-slate-800',
  secondary:
    'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-800 active:border-slate-200 active:text-slate-700 dark:border-slate-800 dark:bg-slate-900/75 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-slate-100 dark:active:border-slate-800 dark:active:text-slate-200',
};

interface ButtonBaseProps {
  appearance?: ButtonAppearance;
}

interface ButtonDefaultProps
  extends ButtonBaseProps,
    Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
  as?: 'button';
}

interface ButtonAsLinkProps
  extends ButtonBaseProps,
    Omit<ComponentPropsWithoutRef<typeof Link>, 'as' | 'className'> {
  as: 'link';
}

export type ButtonProps = ButtonAsLinkProps | ButtonDefaultProps;

export const Button = ({ appearance = 'primary', ...props }: ButtonProps) => {
  const classes = clsx(
    appearances[appearance],
    'rounded-2xl border px-5 py-3 text-sm font-semibold tracking-tight transition focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 active:scale-95 disabled:opacity-75 dark:focus-visible:ring-teal-700/50 dark:focus-visible:ring-offset-slate-950',
  );

  if (props.as === 'link') {
    const { as, ...rest } = props;
    const linkClasses = clsx(classes, 'text-center');

    return <Link className={linkClasses} {...rest} />;
  }

  return <button className={classes} type="button" {...props} />;
};
