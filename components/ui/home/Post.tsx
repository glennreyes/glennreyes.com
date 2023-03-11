import type { GetPostBySlugReturn } from '~/utils/post';

interface PostProps {
  post: Awaited<GetPostBySlugReturn>;
}

export function Post(props: PostProps) {
  return (
    <div>
      <h3>{props.post.frontmatter.title}</h3>
      <p>{props.post.frontmatter.description}</p>
      <p>{props.post.frontmatter.date}</p>
    </div>
  );
}
