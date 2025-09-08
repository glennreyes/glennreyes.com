import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { H1 } from '../typography/h1';
import { Lead } from '../typography/lead';
import { Meta } from '../typography/meta';
import { Container } from './container';

type PageProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export const Page = (props: PageProps) => (
  <Container className="space-y-12" {...props} />
);

interface PageHeaderProps
  extends Omit<ComponentPropsWithoutRef<'header'>, 'className' | 'title'> {
  lead?: ReactNode;
  meta?: ReactNode;
}

const PageHeader = ({ children, lead, meta, ...props }: PageHeaderProps) => (
  <header className="grid max-w-4xl gap-2" {...props}>
    {meta !== null && meta !== undefined && <Meta>{meta}</Meta>}
    <H1>{children}</H1>
    {lead !== null &&
      lead !== undefined &&
      (typeof lead === 'string' ? <Lead>{lead}</Lead> : lead)}
  </header>
);

Page.Header = PageHeader;

type PageBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

const PageBody = (props: PageBodyProps) => (
  <section className="prose prose-slate dark:prose-invert" {...props} />
);

Page.Body = PageBody;
