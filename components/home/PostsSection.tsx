import { Post } from '~/components/ui/home/Post';
import { Posts } from '~/components/ui/home/Posts';
import { getAllPosts } from '~/utils/post';

export async function PostsSection() {
  const allPosts = await getAllPosts();
  const posts = allPosts.slice(0, 3);

  return (
    <Posts title="Posts">
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </Posts>
  );
}
