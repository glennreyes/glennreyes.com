import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative grid w-full gap-3 rounded-3xl border p-4 not-prose [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11',
  {
    variants: {
      variant: {
        default:
          'border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100',
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

const Alert = ({ className, variant, ...props }: AlertProps) => (
  <div
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
);

interface AlertTitleProps extends ComponentPropsWithoutRef<'h5'> {
  className?: string;
}

const AlertTitle = ({ className, ...props }: AlertTitleProps) => (
  <h5 className={cn('font-medium', className)} {...props} />
);

interface AlertDescriptionProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
}

const AlertDescription = ({ className, ...props }: AlertDescriptionProps) => (
  <div className={cn(className)} {...props} />
);

export { Alert, AlertDescription, AlertTitle };
