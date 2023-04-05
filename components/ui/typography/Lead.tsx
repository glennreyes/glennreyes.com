import type { ComponentPropsWithoutRef } from 'react';
import { Paragraph } from './Paragraph';

type LeadProps = Omit<ComponentPropsWithoutRef<'p'>, 'className'>;

export function Lead(props: LeadProps) {
  return <Paragraph className="lead text-lg text-slate-600 dark:text-slate-400" {...props} />;
}
