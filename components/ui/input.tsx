import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type InputProps = ComponentProps<'input'>;
function Input({ className, type, ...props }: InputProps) {
  return (
    <input
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
