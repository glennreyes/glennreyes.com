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
  return (
    <div className="py-8 md:py-16 lg:py-24">
      <Article>{children}</Article>
    </div>
  );
}
