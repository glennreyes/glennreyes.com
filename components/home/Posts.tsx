import Link from 'next/link';
import { allPosts } from '~/lib/posts';
import { Feed } from '../ui/layout/Feed';
import { Section } from '../ui/layout/Section';

export function Posts() {
  const posts = allPosts.slice(0, 4);

  return (
    <Section>
      <Feed>
        {posts.map(({ excerpt, publishedAt, slug, title }) => (
          <Feed.Card date={publishedAt} description={excerpt} key={slug} link={`/posts/${slug}`} title={title} />
        ))}
      </Feed>
      <Link className="flex items-center gap-1 font-semibold text-stone-400" href="/posts">
        All Posts
      </Link>
    </Section>
  );
}
