'use client';

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
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
const mobileLinks: MenuLink[] = [{ href: '/', label: 'Home' }, ...links];

export function Menu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);
  const toggle = () => setOpen((previous) => !previous);
  const buttonClasses = cn(open && 'opacity-0', '-mx-2.5 md:hidden');

  useEffect(() => {
    close();
  }, [pathname]);

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
          {open ? (
            <motion.div
              ref={menuRef}
              animate={{ opacity: 1 }}
              aria-modal="true"
              className="fixed inset-0 z-30 grid h-screen content-start gap-4 overflow-y-auto bg-white p-6 md:hidden dark:bg-black"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              role="dialog"
              transition={{ duration: 0.15 }}
            >
              <div className="flex justify-end">
                <IconButton
                  appearance="secondary"
                  aria-label="Close Menu"
                  icon={X}
                  onClick={close}
                />
              </div>
              <ul className="grid gap-4">
                {mobileLinks.map((link) => (
                  <li key={link.href}>
                    <MenuLink href={link.href} onClick={close}>
                      {link.label}
                    </MenuLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
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
