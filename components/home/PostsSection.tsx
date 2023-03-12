import { allPosts } from 'contentlayer/generated';
import { Post } from '~/components/ui/home/Post';
import { Posts } from '~/components/ui/home/Posts';

export async function PostsSection() {
  const posts = allPosts.slice(0, 3);

  return (
    <Posts title="Posts">
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </Posts>
  );
}
