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
    <div className="py-8 md:py-16 lg:py-24">
      <Article>{children}</Article>
    </div>
  );
}
