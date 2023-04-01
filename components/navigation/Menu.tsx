'use client';

import { Popover } from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import { Divider } from '../ui/elements/Divider';
import { MenuLink } from './MenuLink';
import { ThemeSwitch } from './ThemeSwitch';

interface MenuLink {
  href: string;
  label: string;
}

const links: MenuLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/posts', label: 'Posts' },
  { href: '/appearances', label: 'Appearances' },
  { href: '/talks', label: 'Talks' },
  { href: '/workshops', label: 'Workshops' },
];

type MenuProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function Menu({ children, ...props }: MenuProps) {
  return (
    <Popover as="nav" className="grid items-center">
      {({ close, open }) => {
        const buttonClasses = clsx(
          open && 'opacity-0',
          '-mx-2 rounded-full border border-transparent p-2 transition hover:border-slate-100 focus:outline-none focus-visible:border-slate-100 focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 active:scale-95 md:hidden',
        );
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
                <div className="absolute right-4 top-4 md:hidden">
                  <button
                    aria-label="Close Menu"
                    className="rounded-full border border-transparent p-2 transition hover:border-slate-100 focus:outline-none focus-visible:border-slate-100 focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 active:scale-95"
                    onClick={close}
                  >
                    <XMarkIcon aria-hidden className="h-6 w-6 text-slate-500" />
                  </button>
                </div>
                <ul className="grid gap-x-4 gap-y-2 pr-12 md:flex md:p-0">
                  {links.map((link) => (
                    <li key={link.href}>
                      <MenuLink href={link.href} onClick={close}>
                        {link.label}
                      </MenuLink>
                    </li>
                  ))}
                </ul>
                <div className="md:hidden">
                  <Divider />
                </div>
                <div className="place-self-start self-start md:hidden">
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
