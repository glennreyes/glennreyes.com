'use client';

import type { ComponentPropsWithoutRef } from 'react';

import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';

import { cn } from '@/lib/utils';

import { Divider } from '../ui/elements/divider';
import { IconButton } from '../ui/elements/icon-button';
import { MenuLink } from './menu-link';
import { ThemeSelect } from './theme-select';

interface MenuLink {
  href: string;
  label: string;
}

const links: MenuLink[] = [
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
        const buttonClasses = cn(open && 'opacity-0', '-mx-2.5 md:hidden');

        return (
          <>
            <PopoverButton
              as={IconButton}
              appearance="secondary"
              aria-label="Open Menu"
              className={buttonClasses}
              icon={Bars2Icon}
            />
            <Transition show={open}>
              <div className="fixed inset-0 z-30 h-screen overflow-y-auto p-4 md:hidden">
                <Transition
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <PopoverOverlay className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm dark:bg-black/75" />
                </Transition>
                <Transition
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <PopoverPanel
                    className="relative grid gap-4 rounded-3xl border border-slate-100 bg-white p-6 dark:border-slate-900 dark:bg-slate-950"
                    {...props}
                  >
                    <div className="absolute top-4 right-4">
                      <IconButton
                        appearance="secondary"
                        aria-label="Close Menu"
                        icon={XMarkIcon}
                        onClick={close}
                      />
                    </div>
                    <ul className="grid gap-2 pe-12">
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
                  </PopoverPanel>
                </Transition>
              </div>
            </Transition>
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
