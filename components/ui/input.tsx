'use client';

import type { ComponentProps } from 'react';
import { Input as InputPrimitive } from '@ui-sdk/react/input';

import { cn } from '@/lib/utils';

type InputProps = Omit<ComponentProps<typeof InputPrimitive>, 'className'> & {
  className?: string;
};
function Input({ className, type, ...props }: InputProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        'border-input bg-background text-foreground placeholder:text-muted-foreground aria-invalid:border-destructive min-h-11 w-full min-w-0 rounded-md border px-5 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
export { Input };
