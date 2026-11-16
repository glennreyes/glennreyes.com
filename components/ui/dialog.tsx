'use client';

import type { ComponentProps, ReactNode } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent as DialogContentPrimitive,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@ui-sdk/react/dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type DialogContentProps = Omit<
  ComponentProps<typeof DialogContentPrimitive>,
  'className' | 'children'
> & {
  className?: string;
  children?: ReactNode;
  showCloseButton?: boolean;
};

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
  return (
    <>
      <DialogBackdrop className="fixed inset-0 bg-black/50 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
      <DialogContentPrimitive
        className={cn(
          'max-w-dialog bg-background text-foreground fixed top-1/2 left-1/2 m-0 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border p-6 pt-16 shadow-lg transition-opacity outline-none data-ending-style:opacity-0 data-starting-style:opacity-0 sm:max-w-lg',
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton ? (
          <DialogClose
            aria-label="Close"
            className="hover:bg-accent absolute top-4 right-4 grid size-11 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <XIcon aria-hidden="true" className="size-4" />
          </DialogClose>
        ) : null}
      </DialogContentPrimitive>
    </>
  );
}

export { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger };
