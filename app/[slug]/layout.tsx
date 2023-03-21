import type { ReactNode } from 'react';
import { Article } from '~/components/ui/layout/Article';
import { ArticleBody } from '~/components/ui/layout/ArticleBody';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Article>
      <ArticleBody>{children}</ArticleBody>
    </Article>
  );
}
