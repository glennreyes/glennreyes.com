import type { ReactNode } from 'react';
import { Article } from '~/components/ui/layout/Article';

interface PostLayoutParams {
  slug: string;
}

interface PostLayoutProps {
  children: ReactNode;
  params: PostLayoutParams;
}

export default function PostLayout({ children }: PostLayoutProps) {
  return <Article>{children}</Article>;
}
