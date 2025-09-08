import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { Link } from '../link/link';

const iconButtonVariants = cva(
  'border rounded-full bg-white/25 dark:bg-slate-950/25 text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 dark:focus:text-slate-300 dark:active:text-slate-200 transition focus:text-slate-600 focus:outline-none focus:transition-none active:scale-95 active:text-slate-700 disabled:opacity-75',
  {
    variants: {
      appearance: {
        primary:
          'border-slate-300/25 dark:border-slate-600/25 dark:bg-slate-900/75 hover:border-slate-200 dark:hover:border-slate-700 active:border-slate-300 dark:active:border-slate-700',
        secondary:
          'border-transparent hover:border-slate-300/25 dark:hover:border-slate-900 active:border-slate-200 dark:active:border-slate-800',
        tertiary:
          'border-transparent hover:text-slate-600 dark:hover:text-slate-300 active:text-slate-700 dark:active:text-slate-200',
      },
      size: {
        5: 'p-2',
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
  extends IconButtonBaseProps,
    Omit<ComponentPropsWithoutRef<'button'>, 'children'> {
  as?: 'button';
  className?: string;
}

interface IconButtonAsLinkProps
  extends IconButtonBaseProps,
    ComponentPropsWithoutRef<typeof Link> {
  as: 'link';
  className?: string;
}

type IconButtonProps = IconButtonAsLinkProps | IconButtonDefaultProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ appearance, size, className, icon: Icon, ...props }, ref) => {
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
      'focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 dark:focus-visible:ring-teal-700/50 dark:focus-visible:ring-offset-slate-950',
    );

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        <Icon aria-hidden className={iconClasses} />
      </button>
    );
  },
);
IconButton.displayName = 'IconButton';
