import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { unstable_ViewTransition as ViewTransition } from 'react';

import { H1 } from '../typography/h1';
import { Lead } from '../typography/lead';
import { Meta } from '../typography/meta';
import { Container } from './container';

type PageProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function Page(props: PageProps) {
  return <Container className="space-y-12" {...props} />;
}

interface PageHeaderProps
  extends Omit<ComponentPropsWithoutRef<'header'>, 'className' | 'title'> {
  lead?: ReactNode;
  meta?: ReactNode;
  viewTransitionName?: string;
}

function PageHeader({
  children,
  lead,
  meta,
  viewTransitionName,
  ...props
}: PageHeaderProps) {
  return (
    <header className="grid max-w-4xl gap-4" {...props}>
      {meta !== null && meta !== undefined && <Meta>{meta}</Meta>}
      <H1>
        {viewTransitionName ? (
          <ViewTransition name={viewTransitionName}>{children}</ViewTransition>
        ) : (
          children
        )}
      </H1>
      {lead !== null &&
        lead !== undefined &&
        (typeof lead === 'string' ? <Lead>{lead}</Lead> : lead)}
    </header>
  );
}

Page.Header = PageHeader;

type PageBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

function PageBody(props: PageBodyProps) {
  return <section className="prose prose-slate dark:prose-invert" {...props} />;
}

Page.Body = PageBody;
