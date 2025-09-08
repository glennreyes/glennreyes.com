'use client';

import type { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import photo from '@/assets/images/photo.jpg';
import { name } from '@/lib/constants';

type AvatarSize = 11 | 34;

const attributes: Record<
  AvatarSize,
  Pick<ComponentPropsWithoutRef<typeof Image>, 'className' | 'height' | 'width'>
> = {
  11: {
    className: 'h-11 w-11 p-0.5',
    height: 40,
    width: 40,
  },
  34: {
    className: 'h-34 w-34 p-1',
    height: 136,
    width: 136,
  },
};

interface AvatarProps
  extends Omit<
    ComponentPropsWithoutRef<typeof Image>,
    'alt' | 'className' | 'height' | 'placeholder' | 'src' | 'width'
  > {
  size?: AvatarSize;
}

export const Avatar = ({ size = 34, ...props }: AvatarProps) => {
  const { className, ...sizeAttributes } = attributes[size];
  const classes = clsx('relative rounded-full', className);

  return (
    <div className={classes}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-slate-200 to-transparent motion-safe:animate-spin motion-safe:[animation-duration:10s] dark:from-transparent dark:via-slate-800/50 dark:to-transparent" />
      <Image
        alt={name}
        className="relative rounded-full"
        placeholder="blur"
        src={photo}
        {...sizeAttributes}
        {...props}
      />
    </div>
  );
};
