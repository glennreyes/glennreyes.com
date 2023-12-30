'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Fragment } from 'react';

import { Divider } from '../ui/elements/divider';
import { IconButton } from '../ui/elements/icon-button';
import { MenuLink } from './menu-link';
import { ThemeSelect } from './theme-select';

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

export function Menu(props: MenuProps) {
  return (
    <Popover as="nav" className="grid items-center">
      {({ close, open }) => {
        const buttonClasses = clsx(open && 'opacity-0', '-mx-2.5 md:hidden');

        return (
          <>
            <Popover.Button as={Fragment}>
              <IconButton
                appearance="secondary"
                aria-label="Open Menu"
                className={buttonClasses}
                icon={Bars2Icon}
              />
            </Popover.Button>
            <Transition.Root className="fixed inset-0 z-30 h-screen overflow-y-auto p-4 md:hidden">
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm dark:bg-black/75" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                unmount={false}
              >
                <Popover.Panel
                  className="relative grid gap-4 rounded-[1.75rem] border border-slate-100 bg-white p-6 dark:border-slate-900 dark:bg-slate-950"
                  static
                  {...props}
                >
                  <div className="absolute right-4 top-4">
                    <IconButton
                      appearance="secondary"
                      aria-label="Close Menu"
                      icon={XMarkIcon}
                      onClick={close}
                    />
                  </div>
                  <ul className="grid gap-2 pr-12">
                    {links.map((link) => (
                      <li key={link.href}>
                        <MenuLink href={link.href} onClick={close}>
                          {link.label}
                        </MenuLink>
                      </li>
                    ))}
                  </ul>
                  <Divider />
                  <div className="place-self-start">
                    <ThemeSelect native />
                  </div>
                </Popover.Panel>
              </Transition.Child>
            </Transition.Root>
            <ul className="hidden gap-2 md:flex">
              {links.map((link) => (
                <li key={link.href}>
                  <MenuLink href={link.href} onClick={close}>
                    {link.label}
                  </MenuLink>
                </li>
              ))}
            </ul>
          </>
        );
      }}
    </Popover>
  );
}
