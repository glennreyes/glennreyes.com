import { allPages } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Article } from '~/components/ui/layout/Article';
import { ArticleBody } from '~/components/ui/layout/ArticleBody';
import { ArticleHeader } from '~/components/ui/layout/ArticleHeader';
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

  if (!page) {
    notFound();
  }

  return (
    <Article>
      <ArticleHeader lead={page.lead}>{page.heading ?? page.title}</ArticleHeader>
      <ArticleBody>
        <MDXContent code={page.body.code} />
      </ArticleBody>
    </Article>
  );
}
