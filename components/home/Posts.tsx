import { Feed } from '~/components/ui/feed/Feed';
import { FeedCard } from '~/components/ui/feed/FeedCard';
import { Section } from '~/components/ui/layout/Section';
import { allPosts } from '~/lib/posts';

export function Posts() {
  const posts = allPosts.slice(0, 4);

  return (
    <Section>
      <Feed>
        {posts.map(({ excerpt, publishedAt, slug, title }) => (
          <FeedCard date={publishedAt} description={excerpt} key={slug} link={`/posts/${slug}`} title={title} />
        ))}
      </Feed>
    </Section>
  );
}
