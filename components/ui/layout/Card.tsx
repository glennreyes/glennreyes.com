import type { ComponentPropsWithoutRef } from 'react';

type CardProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function Card(props: CardProps) {
  return <div className="rounded-2xl border border-stone-100 p-6" {...props} />;
}
