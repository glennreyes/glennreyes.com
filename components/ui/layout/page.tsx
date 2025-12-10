import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { H1 } from '../typography/h1';
import { Lead } from '../typography/lead';
import { Meta } from '../typography/meta';
import { Container } from './container';

type PageProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

function Page(props: PageProps) {
  return <Container className="space-y-12" {...props} />;
}

interface PageHeaderProps extends Omit<
  ComponentPropsWithoutRef<'header'>,
  'className' | 'title'
> {
  lead?: ReactNode;
  meta?: ReactNode;
}

function PageHeader({ children, lead, meta, ...props }: PageHeaderProps) {
  return (
    <header className="grid max-w-4xl gap-4" {...props}>
      {meta !== null && meta !== undefined ? <Meta>{meta}</Meta> : null}
      <H1>{children}</H1>
      {lead !== null && lead !== undefined ? (
        typeof lead === 'string' ? (
          <Lead>{lead}</Lead>
        ) : (
          lead
        )
      ) : null}
    </header>
  );
}

type PageBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

function PageBody(props: PageBodyProps) {
  return <section className="prose prose-slate dark:prose-invert" {...props} />;
}

type PageComponent = typeof Page & {
  Body: typeof PageBody;
  Header: typeof PageHeader;
};

const PageComponentWithSections = Page as PageComponent;

PageComponentWithSections.Body = PageBody;
PageComponentWithSections.Header = PageHeader;

export { PageComponentWithSections as Page };
