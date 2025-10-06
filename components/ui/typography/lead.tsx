import type { ComponentPropsWithoutRef } from 'react';

import { Paragraph } from './paragraph';

type LeadProps = Omit<ComponentPropsWithoutRef<'p'>, 'className'>;

export function Lead(props: LeadProps) {
  return <Paragraph className="text-gray-600 dark:text-gray-400" {...props} />;
}
