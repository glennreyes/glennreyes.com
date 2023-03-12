import { allPages } from 'contentlayer/generated';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Article } from '~/components/ui/layout/Article';
import { getTitle } from '~/utils/metadata';

interface GenerateMetaDataConfigParams {
  slug: string;
}

interface GenerateMetaDataConfig {
  params: GenerateMetaDataConfigParams;
}

export async function generateMetaData({ params }: GenerateMetaDataConfig): Promise<Metadata> {
  const page = allPages.find(({ slug }) => slug === params.slug);

  return {
    title: getTitle(page?.title),
  };
}

interface LayoutParams {
  slug: string;
}

interface LayoutProps {
  children: ReactNode;
  params: LayoutParams;
}

export default function Layout({ params, ...props }: LayoutProps) {
  return (
    <div className="py-8 md:py-16 lg:py-24">
      <Article {...props} />
    </div>
  );
}
