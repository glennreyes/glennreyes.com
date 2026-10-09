import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full border px-2.5 py-1.5 lowercase',
  {
    variants: {
      color: {
        rose: 'border-rose-200 bg-rose-50 text-rose-500 dark:border-rose-800/50 dark:bg-rose-950/50 dark:text-rose-500',
        sky: 'border-sky-200 bg-sky-50 text-sky-500 dark:border-sky-800/50 dark:bg-sky-950/50 dark:text-sky-500',
        slate:
          'border-neutral-200 bg-neutral-50 text-neutral-500 dark:border-neutral-800/50 dark:bg-neutral-950/50 dark:text-neutral-500',
        teal: 'border-neutral-200 bg-neutral-50 text-neutral-500 dark:border-neutral-800/50 dark:bg-neutral-950/50 dark:text-neutral-500',
      },
    },
    defaultVariants: {
      color: 'teal',
    },
  },
);

interface BadgeProps
  extends
    Omit<ComponentPropsWithoutRef<'span'>, 'className' | 'color'>,
    VariantProps<typeof badgeVariants> {
  className?: string;
}

export function Badge({ color, className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ color }), className)} {...props} />
  );
}
