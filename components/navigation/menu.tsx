'use client';

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);
  const toggle = () => setOpen((previous) => !previous);
  const buttonClasses = cn(open && 'opacity-0', '-mx-2.5 md:hidden');

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        menuButtonRef.current?.focus();
      }

      if (event.key === 'Tab') {
        const menu = menuRef.current;

        if (!menu) {
          return;
        }

        const focusableElements = menu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const firstLink = menuRef.current?.querySelector<HTMLElement>('a[href]');

    firstLink?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <LayoutGroup>
      <nav aria-label="Main navigation" className="grid items-center">
        <IconButton
          ref={menuButtonRef}
          appearance="secondary"
          aria-expanded={open}
          aria-label="Open Menu"
          className={buttonClasses}
          icon={MenuIcon}
          onClick={toggle}
        />
        <AnimatePresence>
          {open && (
            <div
              aria-modal="true"
              className="fixed inset-0 z-30 h-screen overflow-y-auto p-4 md:hidden"
              role="dialog"
            >
              <motion.div
                animate={{ opacity: 1 }}
                aria-hidden="true"
                className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm dark:bg-black/75"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                onClick={close}
                transition={{ duration: 0.15 }}
              />
              <motion.div
                ref={menuRef}
                animate={{ opacity: 1, scale: 1 }}
                className="relative grid gap-4 rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-900 dark:bg-black"
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
