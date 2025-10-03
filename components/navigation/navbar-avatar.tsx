'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';

import { useIsActivePathname } from '@/lib/hooks/use-is-active-pathname';

import { Intersection } from '../intersection/intersection';

type NavbarAvatarProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function NavbarAvatar({ children }: NavbarAvatarProps) {
  const { isInView } = useContext(Intersection);
  const isHome = useIsActivePathname('/');

  if (!isHome) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence>
      {!isInView && (
        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="flex flex-none"
          exit={{ opacity: 0, scale: 0.95, y: '25%' }}
          initial={{ opacity: 0, scale: 0.95, y: '25%' }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
