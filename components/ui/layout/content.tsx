import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type ContentProps = Omit<ComponentPropsWithoutRef<'section'>, 'className'>;

export function Content(props: ContentProps) {
  return <section className="grid gap-12 lg:grid-cols-12" {...props} />;
}

type ContentPrimaryProps = ComponentPropsWithoutRef<'div'>;

function ContentPrimary({ className, ...props }: ContentPrimaryProps) {
  const classes = twMerge('lg:col-span-8', className);

  return <div className={classes} {...props} />;
}

Content.Primary = ContentPrimary;

type ContentSecondaryProps = ComponentPropsWithoutRef<'div'>;

export function ContentSecondary({ className, ...props }: ContentSecondaryProps) {
  const classes = twMerge('grid content-start gap-8 lg:col-span-4', className);

  return <div className={classes} {...props} />;
}

Content.Secondary = ContentSecondary;
