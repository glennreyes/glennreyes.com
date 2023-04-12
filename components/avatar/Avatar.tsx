'use client';

import Image from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import photo from '~/assets/images/photo.jpg';
import { name } from '~/lib/constants';

type AvatarSize = 11 | 28 | 40;

const attributes: Record<AvatarSize, Pick<ComponentPropsWithoutRef<typeof Image>, 'className' | 'height' | 'width'>> = {
  11: {
    className: 'h-11 w-11 border',
    height: 44,
    width: 44,
  },
  28: {
    className: 'h-28 w-28 border-2',
    height: 112,
    width: 112,
  },
  40: {
    className: 'h-40 w-40 border-4',
    height: 160,
    width: 160,
  },
};

interface AvatarProps
  extends Omit<
    ComponentPropsWithoutRef<typeof Image>,
    'alt' | 'className' | 'height' | 'placeholder' | 'src' | 'width'
  > {
  size?: AvatarSize;
}

export function Avatar({ size = 40, ...props }: AvatarProps) {
  const { className, ...sizeAttributes } = attributes[size];
  const classes = twMerge(className, 'border-slate-200 dark:border-slate-900 rounded-full');

  return <Image alt={name} className={classes} placeholder="blur" src={photo} {...sizeAttributes} {...props} />;
}
