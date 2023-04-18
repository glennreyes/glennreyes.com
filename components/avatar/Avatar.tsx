'use client';

import clsx from 'clsx';
import Image from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';
import photo from '~/assets/images/photo.jpg';
import { name } from '~/lib/constants';

type AvatarSize = 11 | 28 | 40;

const attributes: Record<AvatarSize, Pick<ComponentPropsWithoutRef<typeof Image>, 'className' | 'height' | 'width'>> = {
  11: {
    className: 'h-11 w-11 p-px',
    height: 44,
    width: 44,
  },
  28: {
    className: 'h-28 w-28 p-0.5',
    height: 112,
    width: 112,
  },
  40: {
    className: 'h-40 w-40 p-1',
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
  const classes = clsx('relative rounded-full', className);

  return (
    <div className={classes}>
      <div className="dark:from-slate-transparent dark:to-slate-transparent absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-slate-200 to-transparent motion-safe:animate-spin motion-safe:[animation-duration:10s] dark:via-slate-800/50" />
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
}
