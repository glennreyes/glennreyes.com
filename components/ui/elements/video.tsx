import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type VideoProps = ComponentPropsWithoutRef<'video'>;

export function Video({ className, ...props }: VideoProps) {
  return (
    <video
      controls
      preload="metadata"
      className={cn('aspect-video w-full rounded-3xl', className)}
      {...props}
    />
  );
}
