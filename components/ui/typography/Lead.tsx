import type { ComponentPropsWithoutRef } from 'react';

type LeadProps = Omit<ComponentPropsWithoutRef<'p'>, 'className'>;

export function Lead(props: LeadProps) {
  return <p className="text-lg font-medium text-stone-500" {...props} />;
}