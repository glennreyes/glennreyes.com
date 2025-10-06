import type {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
} from 'react';

import { cn } from '@/lib/utils';

import type { DateDisplay } from '../elements/date-display';

type MetaProps<TElementType extends ElementType> =
  ComponentPropsWithoutRef<TElementType> &
    HTMLAttributes<TElementType> & {
      as?:
        | ElementType<ComponentPropsWithoutRef<typeof DateDisplay>>
        | Extract<TElementType, 'div' | 'p'>;
    };

export function Meta<TElementType extends ElementType>({
  as,
  className,
  ...props
}: MetaProps<TElementType>) {
  const Component = as ?? 'div';
  const classes = cn('text-gray-400 dark:text-gray-500', className);

  return <Component className={classes} {...props} />;
}
