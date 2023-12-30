import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { notFound } from 'next/navigation';
import { PostFooter } from '@/components/posts/post-footer';
import { DateDisplay } from '@/components/ui/elements/date-display';
import { IconButton } from '@/components/ui/elements/icon-button';
import {
  ReadingTime,
  parseReadingTimeValue,
} from '@/components/ui/elements/reading-time';
import { Article } from '@/components/ui/layout/article';
import { MDXContent } from '@/components/ui/mdx/mdx-content';
import { origin } from '@/lib/constants';
import { allPosts } from 'contentlayer/generated';

interface GenerateMetadataConfigParams {
  slug: string;
}

interface GenerateMetadataConfig {
  params: GenerateMetadataConfigParams;
}

export function generateMetadata({ params }: GenerateMetadataConfig) {
  const post = allPosts.find(({ slug }) => slug === params.slug);

  if (!post) {
    return {};
  }

  const { description, slug, title } = post;
  const url = `${origin}/posts/${slug}`;

  return {
    description,
    openGraph: {
      description,
      locale: 'en-US',
      siteName: title,
      title,
      type: 'article',
      url,
    },
    title,
  };
}

export function generateStaticParams() {
  return allPosts
    .filter((post) => post.publishedAt)
    .map((post) => ({ slug: post.slug }));
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
        lead={post.lead}
        meta={
          <>
            <DateDisplay value={post.publishedAt} /> ·{' '}
            <ReadingTime value={parseReadingTimeValue(post.readingTime)} />
          </>
        }
      >
        {post.title}
      </Article.Header>
      <Article.Body>
        <MDXContent code={post.body.code} />
      </Article.Body>
      <Article.Footer>
        <PostFooter />
      </Article.Footer>
    </Article>
  );
}
