'use client';

import type { ComponentPropsWithoutRef } from 'react';

import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react';
import { useState } from 'react';
import { SkipNavigationLink } from '@/components/ui/elements/skip-navigation-link';
import { Container } from '@/components/ui/layout/container';
import { Link } from '@/components/ui/link/link';
type NavbarProps = Omit<ComponentPropsWithoutRef<'header'>, 'className'>;
export function Navbar({ children, ...props }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const reducedMotion = useReducedMotion();

  useMotionValueEvent(scrollY, 'change', (position) => {
    setScrolled(position > 24);
  });

  return (
    <header
      className="pointer-events-none sticky top-0 z-30 py-3"
      data-scrolled={scrolled}
      {...props}
    >
      <Container>
        <SkipNavigationLink />
        <LazyMotion features={domAnimation} strict>
          <m.div
            animate={{
              maxWidth: scrolled ? 1120 : 1280,
              paddingInline: scrolled ? 20 : 0,
            }}
            className="pointer-events-auto relative mx-auto flex w-full items-center justify-between gap-2 rounded-full py-2"
            initial={false}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 260, damping: 30 }
            }
          >
            <m.div
              aria-hidden="true"
              animate={{ opacity: scrolled ? 1 : 0 }}
              className="nav-glass pointer-events-none absolute inset-0 rounded-full"
              initial={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
            />
            <Link
              aria-label="Glenn Reyes, home"
              className="relative inline-flex min-h-11 shrink-0 items-center rounded-full"
              href="/"
            >
              Glenn Reyes
            </Link>
            <div className="relative">{children}</div>
          </m.div>
        </LazyMotion>
      </Container>
    </header>
  );
}
