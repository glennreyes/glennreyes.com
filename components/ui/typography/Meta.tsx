import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DateDisplay } from '../elements/DateDisplay';

type MetaProps<TElementType extends ElementType> = ComponentPropsWithoutRef<TElementType> & {
  as?: ElementType<ComponentPropsWithoutRef<typeof DateDisplay>> | Extract<TElementType, 'div' | 'p'>;
};

export function Meta<TElementType extends ElementType>({ as, className, ...props }: MetaProps<TElementType>) {
  const Component = as ?? 'div';
  const classes = twMerge('text-slate-400 dark:text-slate-500', className);

  return <Component className={classes} {...props} />;
}
