'use client';

import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';

import Image from 'next/image';

import photo from '@/assets/images/photo.jpg';
import { name } from '@/lib/constants';
import { cn } from '@/lib/utils';

const avatarVariants = cva('relative rounded-full', {
  variants: {
    size: {
      11: 'h-11 w-11 p-0.5',
      34: 'h-34 w-34 p-1',
    },
  },
  defaultVariants: {
    size: 34,
  },
});

const avatarImageSizes = {
  11: { height: 40, width: 40 },
  34: { height: 136, width: 136 },
} as const;

interface AvatarProps
  extends Omit<
      ComponentPropsWithoutRef<typeof Image>,
      'alt' | 'className' | 'height' | 'placeholder' | 'src' | 'width'
    >,
    VariantProps<typeof avatarVariants> {
  className?: string;
}

export const Avatar = ({ size, className, ...props }: AvatarProps) => {
  const classes = cn(avatarVariants({ size }), className);
  const imageSize = avatarImageSizes[size || 34];

  return (
    <div className={classes}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-slate-200 to-transparent motion-safe:animate-spin motion-safe:[animation-duration:10s] dark:from-transparent dark:via-slate-800/50 dark:to-transparent" />
      <Image
        alt={name}
        className="relative rounded-full"
        placeholder="blur"
        src={photo}
        {...imageSize}
        {...props}
      />
    </div>
  );
};
