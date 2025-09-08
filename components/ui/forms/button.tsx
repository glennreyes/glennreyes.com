import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';

import Link from 'next/link';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'border px-5 py-3 font-medium transition focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:transition-none active:scale-95 disabled:opacity-75 dark:focus-visible:ring-teal-700/50 dark:focus-visible:ring-offset-slate-950',
  {
    variants: {
      appearance: {
        primary:
          'border-slate-800 bg-slate-800 text-slate-100 hover:border-slate-700 hover:bg-slate-700 active:border-slate-800 active:bg-slate-800',
        secondary:
          'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-800 active:border-slate-200 active:text-slate-700 dark:border-slate-800 dark:bg-slate-900/75 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-slate-100 dark:active:border-slate-800 dark:active:text-slate-200',
      },
      variant: {
        default: 'rounded-2xl',
        'input-button': 'rounded-xl',
      },
    },
    defaultVariants: {
      appearance: 'primary',
      variant: 'default',
    },
  },
);

interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {}

interface ButtonDefaultProps
  extends ButtonBaseProps,
    Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
  as?: 'button';
  className?: string;
}

interface ButtonAsLinkProps
  extends ButtonBaseProps,
    Omit<ComponentPropsWithoutRef<typeof Link>, 'as' | 'className'> {
  as: 'link';
  className?: string;
}

type ButtonProps = ButtonAsLinkProps | ButtonDefaultProps;

export const Button = ({
  appearance,
  variant,
  className,
  ...props
}: ButtonProps) => {
  const classes = cn(buttonVariants({ appearance, variant }), className);

  if (props.as === 'link') {
    const { as: _as, ...rest } = props;
    const linkClasses = cn(classes, 'text-center');

    return <Link className={linkClasses} {...rest} />;
  }

  return <button className={classes} type="button" {...props} />;
};
