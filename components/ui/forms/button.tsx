import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'border px-5 py-3 font-medium transition focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:transition-none active:scale-95 disabled:opacity-75 dark:focus-visible:ring-neutral-700/50 dark:focus-visible:ring-offset-black',
  {
    variants: {
      appearance: {
        primary:
          'border-neutral-800 bg-neutral-800 text-neutral-100 hover:border-neutral-700 hover:bg-neutral-700 active:border-neutral-800 active:bg-neutral-800',
        secondary:
          'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:text-neutral-800 active:border-neutral-200 active:text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/75 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:text-neutral-100 dark:active:border-neutral-800 dark:active:text-neutral-200',
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

type ButtonBaseProps = VariantProps<typeof buttonVariants>;

interface ButtonDefaultProps
  extends
    ButtonBaseProps,
    Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
  as?: 'button';
  className?: string;
}

interface ButtonAsLinkProps
  extends
    ButtonBaseProps,
    Omit<ComponentPropsWithoutRef<typeof Link>, 'as' | 'className'> {
  as: 'link';
  className?: string;
}

type ButtonProps = ButtonAsLinkProps | ButtonDefaultProps;

export function Button({
  appearance,
  variant,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ appearance, variant }), className);

  if (props.as === 'link') {
    const { as: _as, ...rest } = props;
    const linkClasses = cn(classes, 'text-center');

    return <Link className={linkClasses} {...rest} />;
  }

  return <button className={classes} type="button" {...props} />;
}
