import type { Post } from 'contentlayer/generated';

interface PostProps {
  post: Post;
}

export function Post(props: PostProps) {
  return (
    <div>
      <h3>{props.post.title}</h3>
      <p>{props.post.description}</p>
      <p>{props.post.publishedAt}</p>
    </div>
  );
}
