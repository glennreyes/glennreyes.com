import { allPosts } from 'contentlayer/generated';
import type { Post } from 'contentlayer/generated';
import { Post as PostItem } from '~/components/ui/home/Post';
import { Posts } from '~/components/ui/home/Posts';

export async function PostsSection() {
  const posts = allPosts.filter((post): post is Post & { publishedAt: string } => !!post.publishedAt).slice(0, 4);

  return (
    <Posts title="Posts">
      {posts.map(({ excerpt, publishedAt, readingTime, slug, title }) => (
        <PostItem key={slug} post={{ excerpt, publishedAt, readingTime, slug, title }} />
      ))}
    </Posts>
  );
}
