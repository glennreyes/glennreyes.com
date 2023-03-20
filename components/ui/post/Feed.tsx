import type { ComponentPropsWithoutRef } from 'react';

type FeedProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function Feed(props: FeedProps) {
  return <div className="grid gap-8 md:gap-12" {...props} />;
}
