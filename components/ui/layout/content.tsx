import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type ContentProps = Omit<ComponentPropsWithoutRef<'section'>, 'className'>;

export const Content = (props: ContentProps) => (
  <section className="grid gap-12 lg:grid-cols-12" {...props} />
);

type ContentPrimaryProps = ComponentPropsWithoutRef<'div'>;

const ContentPrimary = ({ className, ...props }: ContentPrimaryProps) => {
  const classes = cn('lg:col-span-8', className);

  return <div className={classes} {...props} />;
};

Content.Primary = ContentPrimary;

type ContentSecondaryProps = ComponentPropsWithoutRef<'div'>;

const ContentSecondary = ({ className, ...props }: ContentSecondaryProps) => {
  const classes = cn('grid content-start gap-8 lg:col-span-4', className);

  return <div className={classes} {...props} />;
};

Content.Secondary = ContentSecondary;
