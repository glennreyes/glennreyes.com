'use client';

import { Popover } from '@headlessui/react';
import { Bars2Icon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

type NavbarMenuProps = Omit<ComponentPropsWithoutRef<'ul'>, 'className'>;

export function NavbarMenu(props: NavbarMenuProps) {
  return (
    <Popover as="nav" className="grid items-center md:flex-1">
      {({ open }) => {
        const panelClasses = clsx(open ? 'grid' : 'hidden', 'gap-4 md:flex');

        return (
          <>
            <Popover.Button className="md:hidden">
              <Bars2Icon aria-hidden className="h-6 w-6 text-slate-500" />
            </Popover.Button>
            <Popover.Panel as="ul" className={panelClasses} static {...props} />
          </>
        );
      }}
    </Popover>
  );
}
