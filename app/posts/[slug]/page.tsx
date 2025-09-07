import type { Metadata } from 'next';

import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { notFound } from 'next/navigation';

import { PostFooter } from '@/components/posts/post-footer';
import { DateDisplay } from '@/components/ui/elements/date-display';
import { IconButton } from '@/components/ui/elements/icon-button';
import { Article } from '@/components/ui/layout/article';
import { origin } from '@/lib/constants';
import { getAllPosts } from '@/lib/posts';

export const generateMetadata = async (
  props: PageProps<'/posts/[slug]'>,
): Promise<Metadata> => {
  const params = await props.params;
  const allPosts = await getAllPosts();
  const post = allPosts.find(({ slug }) => slug === params.slug);

  if (!post) {
    return {};
  }

  const { frontmatter, slug } = post;
  const url = `${origin}/posts/${slug}`;

  return {
    description: frontmatter.description,
    openGraph: {
      description: frontmatter.description,
      locale: 'en-US',
      siteName: frontmatter.title,
      title: frontmatter.title,
      type: 'article',
      url,
    },
    title: frontmatter.title,
  };
};

export const generateStaticParams = async () => {
  const allPosts = await getAllPosts();

  return allPosts
    .filter((post) => post.frontmatter.publishedAt)
    .map((post) => ({ slug: post.slug }));
};

const PostPage = async (props: PageProps<'/posts/[slug]'>) => {
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
          icon={ArrowLeftIcon}
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
};

export default PostPage;
