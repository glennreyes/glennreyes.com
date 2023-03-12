import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Article } from '~/components/ui/layout/Article';
import { getTitle } from '~/utils/metadata';
import { getPostBySlug } from '~/utils/post';

interface GenerateMetaDataConfigParams {
  slug: string;
}

interface GenerateMetaDataConfig {
  params: GenerateMetaDataConfigParams;
}

export async function generateMetaData({ params }: GenerateMetaDataConfig): Promise<Metadata> {
  const { frontmatter } = await getPostBySlug(params.slug);

  return {
    title: getTitle(frontmatter.title),
  };
}

interface PostLayoutProps {
  children: ReactNode;
  slug: string;
}

export default function PostLayout(props: PostLayoutProps) {
  return <Article {...props} />;
}
