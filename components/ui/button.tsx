'use client';

import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';
import { Button as ButtonPrimitive } from '@ui-sdk/react/button';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        destructive: 'bg-destructive text-white hover:bg-destructive/80',
        outline: 'border border-input bg-background hover:bg-accent',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-5 py-2',
        sm: 'px-4 py-2',
        lg: 'px-8 py-3',
        icon: 'size-11',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);
type ButtonProps = Omit<ComponentProps<typeof ButtonPrimitive>, 'className'> &
  VariantProps<typeof buttonVariants> & { className?: string };

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
export { Button, buttonVariants };
