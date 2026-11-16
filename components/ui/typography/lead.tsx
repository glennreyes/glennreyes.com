import type { ComponentPropsWithoutRef } from 'react';

import { Paragraph } from './paragraph';

type LeadProps = Omit<ComponentPropsWithoutRef<'p'>, 'className'>;

export function Lead(props: LeadProps) {
  return (
    <Paragraph className="text-neutral-600 dark:text-neutral-400" {...props} />
  );
}
