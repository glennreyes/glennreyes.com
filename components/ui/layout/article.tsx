import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Divider } from '../elements/divider';
import { H1 } from '../typography/h1';
import { Lead } from '../typography/lead';
import { Meta } from '../typography/meta';
import { Container } from './container';

interface ArticleProps
  extends Omit<ComponentPropsWithoutRef<'article'>, 'className'> {
  back?: ReactNode;
}

export const Article = ({ back, children, ...props }: ArticleProps) => (
  <Container asChild className="space-y-6 lg:space-y-0" {...props}>
    <article>
      {back !== undefined && back !== null ? (
        <>
          <div className="lg:sticky lg:top-20">
            <div className="mx-auto max-w-[70ch] lg:absolute">{back}</div>
          </div>
          <div className="space-y-12">{children}</div>
        </>
      ) : (
        children
      )}
    </article>
  </Container>
);

interface ArticleHeaderProps
  extends Omit<ComponentPropsWithoutRef<'header'>, 'className' | 'title'> {
  lead?: ReactNode;
  meta: ReactNode;
}

export const ArticleHeader = ({
  children,
  lead,
  meta,
  ...props
}: ArticleHeaderProps) => (
  <header className="mx-auto grid max-w-[70ch] gap-4" {...props}>
    {meta !== null && meta !== undefined && <Meta>{meta}</Meta>}
    <H1>{children}</H1>
    {lead !== null && lead !== undefined && <Lead>{lead}</Lead>}
  </header>
);

Article.Header = ArticleHeader;

type ArticleBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

const ArticleBody = (props: ArticleBodyProps) => (
  <div className="prose prose-slate mx-auto dark:prose-invert" {...props} />
);

Article.Body = ArticleBody;

type ArticleFooterProps = Omit<
  ComponentPropsWithoutRef<'article'>,
  'className'
>;

const ArticleFooter = (props: ArticleFooterProps) => (
  <>
    <div className="mx-auto max-w-[70ch]">
      <Divider />
    </div>
    <footer className="mx-auto grid max-w-[70ch] gap-12" {...props} />
  </>
);

Article.Footer = ArticleFooter;
