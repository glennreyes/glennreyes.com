import type { ComponentPropsWithoutRef } from 'react';

type ArticleProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

export function Article(props: ArticleProps) {
  return <article className="grid gap-12 px-4 py-8" {...props} />;
}
