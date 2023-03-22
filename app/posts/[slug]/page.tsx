import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Article } from '~/components/ui/article/Article';
import { ArticleBody } from '~/components/ui/layout/ArticleBody';
import { ArticleHeader } from '~/components/ui/layout/ArticleHeader';
import { MDXContent } from '~/components/ui/mdx/MDXContent';
import { composeTitle } from '~/lib/metadata';

interface GenerateMetadataConfigParams {
  slug: string;
}

interface GenerateMetadataConfig {
  params: GenerateMetadataConfigParams;
}

export async function generateMetadata({ params }: GenerateMetadataConfig): Promise<Metadata> {
  const post = allPosts.find(({ slug }) => slug === params.slug);

  return {
    title: composeTitle(post?.title),
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

  return (
    <Article>
      <ArticleHeader lead={post.lead} publishedAt={post.publishedAt} readingTime={post.readingTime}>
        {post.title}
      </ArticleHeader>
      <ArticleBody>
        <MDXContent code={post.body.code} />
      </ArticleBody>
    </Article>
  );
}
