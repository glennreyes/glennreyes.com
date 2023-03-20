import type { ComponentPropsWithoutRef } from 'react';

type FeedProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function Feed(props: FeedProps) {
  return <div className="grid gap-4" {...props} />;
}
