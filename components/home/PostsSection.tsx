import { allPosts } from 'contentlayer/generated';
import type { Post } from 'contentlayer/generated';
import { Section } from '~/components/ui/layout/Section';
import { Post as PostItem } from '~/components/ui/post/Post';
import { H2 } from '~/components/ui/typography/H2';
import { Feed } from '../ui/post/Feed';

export async function PostsSection() {
  const posts = allPosts.filter((post): post is Post & { publishedAt: string } => !!post.publishedAt).slice(0, 4);

  return (
    <Section>
      <H2>Posts</H2>
      <Feed>
        {posts.map(({ excerpt, publishedAt, readingTime, slug, title }) => (
          <PostItem key={slug} post={{ excerpt, publishedAt, readingTime, slug, title }} />
        ))}
      </Feed>
    </Section>
  );
}
