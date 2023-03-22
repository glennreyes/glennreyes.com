import { Feed } from '~/components/ui/feed/Feed';
import { FeedCard } from '~/components/ui/feed/FeedCard';
import { Section } from '~/components/ui/layout/Section';
import { H2 } from '~/components/ui/typography/H2';
import { allPosts } from '~/lib/posts';

export async function PostsSection() {
  const posts = allPosts.slice(0, 4);

  return (
    <Section>
      <H2>Posts</H2>
      <Feed>
        {posts.map(({ excerpt, publishedAt, slug, title }) => (
          <FeedCard date={publishedAt} description={excerpt} key={slug} link={`/posts/${slug}`} title={title} />
        ))}
      </Feed>
    </Section>
  );
}
