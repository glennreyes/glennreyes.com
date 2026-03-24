import type { Metadata } from 'next';

import { formatISO } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';

import type { PageProps } from '@/types/next';

import { PostFooter } from '@/components/posts/post-footer';
import { DateDisplay } from '@/components/ui/elements/date-display';
import { IconButton } from '@/components/ui/elements/icon-button';
import { Article } from '@/components/ui/layout/article';
import { name, origin } from '@/lib/constants';
import { getAllPosts } from '@/lib/posts';

export const generateMetadata = async (
  props: PageProps<'/posts/preview/[slug]'>,
): Promise<Metadata> => {
  const params = await props.params;
  const allPosts = await getAllPosts();
  const post = allPosts.find(({ slug }) => slug === params.slug);

  if (!post) {
    return {};
  }

  const { frontmatter, slug } = post;
  const url = `${origin}/posts/preview/${slug}`;

  return {
    description: frontmatter.description,
    openGraph: {
      description: frontmatter.description,
      locale: 'en-US',
      siteName: frontmatter.title,
      title: frontmatter.title,
      type: 'article',
      authors: name,
      publishedTime: formatISO(frontmatter.publishedAt),
      url,
    },
    robots: {
      follow: false,
      index: false,
    },
    title: `${frontmatter.title} (Preview)`,
  };
};

async function PreviewPostPage(props: PageProps<'/posts/preview/[slug]'>) {
  await connection();

  const params = await props.params;
  const allPosts = await getAllPosts();
  const post = allPosts.find(({ slug }) => slug === params.slug);

  if (!post?.content) {
    notFound();
  }

  return (
    <Article
      back={
        <IconButton
          aria-label="Back To Posts"
          as="link"
          href="/posts"
          icon={ArrowLeft}
        />
      }
    >
      <Article.Header
        lead={post.frontmatter.lead}
        meta={<DateDisplay value={post.frontmatter.publishedAt} />}
      >
        {post.frontmatter.title}
      </Article.Header>
      <Article.Body>{post.content}</Article.Body>
      <Article.Footer>
        <PostFooter />
      </Article.Footer>
    </Article>
  );
}

export default PreviewPostPage;
