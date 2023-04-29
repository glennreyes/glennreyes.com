import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid';
import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PostFooter } from '~/components/posts/PostFooter';
import { DateDisplay } from '~/components/ui/elements/DateDisplay';
import { IconButton } from '~/components/ui/elements/IconButton';
import { ReadingTime } from '~/components/ui/elements/ReadingTime';
import { Article } from '~/components/ui/layout/Article';
import { MDXContent } from '~/components/ui/mdx/MDXContent';
import { origin } from '~/lib/constants';

interface GenerateMetadataConfigParams {
  slug: string;
}

interface GenerateMetadataConfig {
  params: GenerateMetadataConfigParams;
}

export async function generateMetadata({ params }: GenerateMetadataConfig): Promise<Metadata> {
  const post = allPosts.find(({ slug }) => slug === params.slug);

  if (!post) {
    return {};
  }

  const { slug, description } = post;
  const url = `${origin}/posts/${slug}`;
  const title = post.title;

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

export async function generateStaticParams() {
  return allPosts.filter((post) => post.publishedAt).map((post) => ({ slug: post.slug }));
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
    <Article back={<IconButton aria-label="Back To Posts" as="link" href="/posts" icon={ArrowSmallLeftIcon} />}>
      <Article.Header
        lead={post.lead}
        meta={
          <>
            <DateDisplay value={post.publishedAt} /> · <ReadingTime value={post.readingTime} />
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
