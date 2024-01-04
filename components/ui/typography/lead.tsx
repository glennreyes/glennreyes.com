import type { ComponentPropsWithoutRef } from 'react';

import { Paragraph } from './paragraph';

type LeadProps = Omit<ComponentPropsWithoutRef<'p'>, 'className'>;

export const Lead = (props: LeadProps) => (
  <Paragraph
    className="text-lg text-slate-600 dark:text-slate-400"
    {...props}
  />
);
