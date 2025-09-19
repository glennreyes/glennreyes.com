import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative grid w-full gap-3 rounded-3xl border p-4 not-prose [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11',
  {
    variants: {
      variant: {
        default:
          'border-slate-200 bg-slate-50 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100',
        warning:
          'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-200',
        destructive:
          'border-red-200 bg-red-50 text-red-800 dark:border-red-700 dark:bg-red-900/20 dark:text-red-200',
        success:
          'border-green-200 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-900/20 dark:text-green-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface AlertProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'className'>,
    VariantProps<typeof alertVariants> {
  className?: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  ),
);

Alert.displayName = 'Alert';

interface AlertTitleProps extends ComponentPropsWithoutRef<'h5'> {
  className?: string;
}

const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('font-medium', className)} {...props} />
  ),
);

AlertTitle.displayName = 'AlertTitle';

interface AlertDescriptionProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
}

const AlertDescription = forwardRef<HTMLDivElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(className)} {...props} />
  ),
);

AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertDescription, AlertTitle };
