import type { ReactNode } from 'react';
import { Article } from '~/components/ui/layout/Article';

interface LayoutParams {
  slug: string;
}

interface LayoutProps {
  children: ReactNode;
  params: LayoutParams;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="px-4 py-8">
      <Article>{children}</Article>
    </div>
  );
}
