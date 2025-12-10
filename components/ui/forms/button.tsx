import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'border px-5 py-3 font-medium transition focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:transition-none active:scale-95 disabled:opacity-75 dark:focus-visible:ring-teal-700/50 dark:focus-visible:ring-offset-black',
  {
    variants: {
      appearance: {
        primary:
          'border-gray-800 bg-gray-800 text-gray-100 hover:border-gray-700 hover:bg-gray-700 active:border-gray-800 active:bg-gray-800',
        secondary:
          'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:text-gray-800 active:border-gray-200 active:text-gray-700 dark:border-gray-800 dark:bg-gray-900/75 dark:text-gray-200 dark:hover:border-gray-700 dark:hover:text-gray-100 dark:active:border-gray-800 dark:active:text-gray-200',
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
