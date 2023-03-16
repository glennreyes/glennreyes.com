import type { ComponentPropsWithoutRef } from 'react';

type ArticleProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

export function Article(props: ArticleProps) {
  return (
    <article
      className="prose prose-slate mx-auto max-w-prose prose-headings:font-semibold prose-headings:tracking-tight"
      {...props}
    />
  );
}
