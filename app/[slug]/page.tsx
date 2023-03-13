import { allPages } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useMDXComponent } from '~/hooks/useMDXComponent';
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

export async function generatStaticParams() {
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
  const MDXComponent = useMDXComponent(page?.body.code);

  if (!MDXComponent) {
    notFound();
  }

  return <MDXComponent />;
}
