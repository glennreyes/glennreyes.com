import { allPages } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXContent } from '~/components/ui/mdx/MDXContent';
import { composeTitle } from '~/utils/metadata';

interface GenerateMetadataConfigParams {
  slug: string;
}

interface GenerateMetadataConfig {
  params: GenerateMetadataConfigParams;
}

export async function generateMetadata({ params }: GenerateMetadataConfig): Promise<Metadata> {
  const page = allPages.find(({ slug }) => slug === params.slug);

  return {
    title: composeTitle(page?.title),
  };
}

export async function generateStaticParams() {
  return allPages.map((page) => ({ slug: page.slug }));
}

interface PageParams {
  slug: string;
}

interface PageProps {
  params: PageParams;
}

export default function Page({ params }: PageProps) {
  const page = allPages.find(({ slug }) => slug === params.slug);

  if (!page?.body.code) {
    notFound();
  }

  return <MDXContent code={page.body.code} />;
}
