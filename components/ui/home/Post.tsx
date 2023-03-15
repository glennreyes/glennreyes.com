interface PostProps {
  post: ContentlayerGen['documentTypeMap']['Post'];
}

export function Post(props: PostProps) {
  return (
    <div>
      <div>
        <time>{props.post.publishedAt}</time>
      </div>
      <h3>{props.post.title}</h3>
      <p>{props.post.excerpt}</p>
    </div>
  );
}
