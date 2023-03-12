import { allPosts } from 'contentlayer/generated';
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
  const post = allPosts.find(({ slug }) => slug === params.slug);

  return {
    title: getTitle(post?.title),
  };
}

interface PostLayoutParams {
  slug: string;
}

interface PostLayoutProps {
  children: ReactNode;
  params: PostLayoutParams;
}

export default function PostLayout({ params, ...props }: PostLayoutProps) {
  return <Article {...props} />;
}
