'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { motion } from 'framer-motion';

import { useIntersection } from '@/lib/hooks/use-intersection';

type HeroAvatarProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function HeroAvatar({ children }: HeroAvatarProps) {
  const { isInView, ref } = useIntersection();

  return (
    <div className="h-34 w-34" ref={ref}>
      <motion.div
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
