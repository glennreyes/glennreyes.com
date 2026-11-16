import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { Link } from '../link/link';

const iconButtonVariants = cva(
  'border rounded-full bg-white/25 dark:bg-black/25 text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 dark:focus-visible:text-neutral-300 dark:active:text-neutral-200 transition focus-visible:text-neutral-600 focus-visible:outline-none focus-visible:transition-none active:scale-95 active:text-neutral-700 disabled:opacity-75',
  {
    variants: {
      appearance: {
        primary:
          'border-neutral-300/25 dark:border-neutral-600/25 dark:bg-neutral-900/75 hover:border-neutral-200 dark:hover:border-neutral-700 active:border-neutral-300 dark:active:border-neutral-700',
        secondary:
          'border-transparent hover:border-neutral-300/25 dark:hover:border-neutral-900 active:border-neutral-200 dark:active:border-neutral-800',
        tertiary:
          'border-transparent hover:text-neutral-600 dark:hover:text-neutral-300 active:text-neutral-700 dark:active:text-neutral-200',
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
      'focus-visible:ring-4 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 dark:focus-visible:ring-neutral-700/50 dark:focus-visible:ring-offset-black',
    );

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        <Icon aria-hidden className={iconClasses} />
      </button>
    );
  },
);
