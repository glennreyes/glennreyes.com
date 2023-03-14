import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXContent } from '~/components/ui/mdx/MDXContent';
import { getTitle } from '~/utils/metadata';

interface GenerateMetadataConfigParams {
  slug: string;
}

interface GenerateMetadataConfig {
  params: GenerateMetadataConfigParams;
}

export async function generateMetadata({ params }: GenerateMetadataConfig): Promise<Metadata> {
  const post = allPosts.find(({ slug }) => slug === params.slug);

  return {
    title: getTitle(post?.title),
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

interface PostPageParams {
  slug: string;
}

interface PostPageProps {
  params: PostPageParams;
}

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find(({ slug }) => slug === params.slug);

  if (!post?.body.code) {
    notFound();
  }

  return <MDXContent code={post.body.code} />;
}
