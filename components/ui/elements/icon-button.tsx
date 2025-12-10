import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { Link } from '../link/link';

const iconButtonVariants = cva(
  'border rounded-full bg-white/25 dark:bg-black/25 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 dark:focus-visible:text-gray-300 dark:active:text-gray-200 transition focus-visible:text-gray-600 focus-visible:outline-none focus-visible:transition-none active:scale-95 active:text-gray-700 disabled:opacity-75',
  {
    variants: {
      appearance: {
        primary:
          'border-gray-300/25 dark:border-gray-600/25 dark:bg-gray-900/75 hover:border-gray-200 dark:hover:border-gray-700 active:border-gray-300 dark:active:border-gray-700',
        secondary:
          'border-transparent hover:border-gray-300/25 dark:hover:border-gray-900 active:border-gray-200 dark:active:border-gray-800',
        tertiary:
          'border-transparent hover:text-gray-600 dark:hover:text-gray-300 active:text-gray-700 dark:active:text-gray-200',
      },
      size: {
        5: 'p-3',
        6: 'p-2.5',
      },
    },
    defaultVariants: {
      appearance: 'primary',
      size: 6,
    },
  },
);
const iconSizes = {
  5: 'h-5 w-5',
  6: 'h-6 w-6',
} as const;

interface IconButtonBaseProps extends VariantProps<typeof iconButtonVariants> {
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
}

interface IconButtonDefaultProps
  extends
    IconButtonBaseProps,
    Omit<ComponentPropsWithoutRef<'button'>, 'children'> {
  as?: 'button';
  className?: string;
}

interface IconButtonAsLinkProps
  extends IconButtonBaseProps, ComponentPropsWithoutRef<typeof Link> {
  as: 'link';
  className?: string;
}

type IconButtonProps = IconButtonAsLinkProps | IconButtonDefaultProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    { appearance, size, className, icon: Icon, ...props },
    ref,
  ) {
    const classes = cn(iconButtonVariants({ appearance, size }), className);
    const iconClasses = iconSizes[size ?? 6];

    if (props.as === 'link') {
      const { as: _as, ...rest } = props;
      const linkClasses = cn(
        classes,
        'inline-flex items-center justify-center',
      );

      return (
        <Link className={linkClasses} {...rest}>
          <Icon aria-hidden className={iconClasses} />
        </Link>
      );
    }

    const buttonClasses = cn(
      classes,
      'focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 dark:focus-visible:ring-teal-700/50 dark:focus-visible:ring-offset-black',
    );

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        <Icon aria-hidden className={iconClasses} />
      </button>
    );
  },
);
