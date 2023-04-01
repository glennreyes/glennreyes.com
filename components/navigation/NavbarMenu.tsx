'use client';

import { Popover } from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import { Divider } from '../ui/elements/Divider';
import { ThemeSwitch } from './ThemeSwitch';

type NavbarMenuProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function NavbarMenu({ children, ...props }: NavbarMenuProps) {
  return (
    <Popover as="nav" className="grid items-center">
      {({ close, open }) => {
        const buttonClasses = clsx(open ? 'opacity-0' : 'md:hidden');
        const wrapperClasses = clsx(
          open
            ? 'overflow-y-auto fixed inset-0 z-30 h-screen md:h-auto md:static md:overflow-visible p-4 md:p-0'
            : 'hidden md:block',
        );

        return (
          <>
            <Popover.Button className={buttonClasses}>
              <Bars2Icon aria-hidden className="h-6 w-6 text-slate-500" />
            </Popover.Button>
            <div className={wrapperClasses}>
              <Popover.Overlay className="absolute inset-0 bg-slate-900/25 md:static md:bg-transparent" />
              <Popover.Panel
                className="relative grid gap-4 rounded-[1.75rem] border border-slate-100 bg-white p-6 md:rounded-none md:border-none md:bg-transparent md:p-0"
                static
                {...props}
              >
                {/* <Popover.Overlay className="absolute inset-0 bg-slate-900/25 md:bg-transparent" /> */}
                <div className="absolute right-6 top-6">
                  <button aria-label="Close Menu" className="relative md:hidden" onClick={close}>
                    <XMarkIcon aria-hidden className="h-6 w-6 text-slate-500" />
                  </button>
                </div>
                <ul className="grid gap-x-4 gap-y-2 pr-8 md:flex md:p-0">{children}</ul>
                <div className="md:hidden">
                  <Divider />
                </div>
                <div className="md:hidden">
                  <ThemeSwitch native />
                </div>
              </Popover.Panel>
            </div>
          </>
        );
      }}
    </Popover>
  );
}
