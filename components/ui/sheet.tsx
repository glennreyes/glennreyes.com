'use client';

import type { ComponentProps, ReactNode } from 'react';
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '@ui-sdk/react/drawer';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const Sheet = Drawer;
const SheetTrigger = DrawerTrigger;
const SheetTitle = DrawerTitle;
const SheetDescription = DrawerDescription;

type SheetContentProps = Omit<
  ComponentProps<typeof DrawerContent>,
  'className' | 'children'
> & {
  className?: string;
  children?: ReactNode;
};

function SheetContent({ className, children, ...props }: SheetContentProps) {
  return (
    <>
      <DrawerBackdrop className="fixed inset-0 bg-black/50" />
      <DrawerContent
        initialFocus="[data-close-menu]"
        className={cn(
          'bg-background text-foreground fixed inset-y-0 right-0 m-0 ml-auto flex h-dvh w-4/5 max-w-sm flex-col gap-4 border-l shadow-lg outline-none',
          className,
        )}
        {...props}
      >
        {children}
        <DrawerClose
          aria-label="Close Menu"
          data-close-menu
          className="hover:bg-accent absolute top-4 right-4 grid size-11 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <XIcon aria-hidden="true" className="size-4" />
        </DrawerClose>
      </DrawerContent>
    </>
  );
}

export { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription };
