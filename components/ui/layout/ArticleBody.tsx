import type { ComponentPropsWithoutRef } from 'react';

type ArticleBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

export function ArticleBody(props: ArticleBodyProps) {
  return <div className="prose prose-zinc mx-auto prose-headings:tracking-tight prose-pre:rounded-2xl" {...props} />;
}
