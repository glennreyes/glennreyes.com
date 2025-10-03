'use client';

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { IconButton } from '../ui/elements/icon-button';
import { MenuLink } from './menu-link';

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

export function Menu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const toggle = () => setOpen((prev) => !prev);
  const buttonClasses = cn(open && 'opacity-0', '-mx-2.5 md:hidden');

  return (
    <LayoutGroup>
      <nav className="grid items-center">
        <IconButton
          appearance="secondary"
          aria-label="Open Menu"
          className={buttonClasses}
          icon={MenuIcon}
          onClick={toggle}
        />
        <AnimatePresence>
          {open && (
            <div className="fixed inset-0 z-30 h-screen overflow-y-auto p-4 md:hidden">
              <motion.div
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm dark:bg-black/75"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                onClick={close}
                transition={{ duration: 0.15 }}
              />
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className="relative grid gap-4 rounded-3xl border border-slate-100 bg-white p-6 dark:border-slate-900 dark:bg-slate-950"
                exit={{ opacity: 0, scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="absolute top-4 right-4">
                  <IconButton
                    appearance="secondary"
                    aria-label="Close Menu"
                    icon={X}
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
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <ul className="hidden gap-2 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <MenuLink href={link.href} onClick={close}>
                {link.label}
              </MenuLink>
            </li>
          ))}
        </ul>
      </nav>
    </LayoutGroup>
  );
}
