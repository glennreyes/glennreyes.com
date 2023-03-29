import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AboutAuthorCard } from '~/components/posts/AboutAuthorCard';
import { BackLink } from '~/components/posts/BackLink';
import { DateDisplay } from '~/components/ui/elements/DateDisplay';
import { ReadingTime } from '~/components/ui/elements/ReadingTime';
import { Article } from '~/components/ui/layout/Article';
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
    <Article back={<BackLink />}>
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
        <AboutAuthorCard />
      </Article.Footer>
    </Article>
  );
}
