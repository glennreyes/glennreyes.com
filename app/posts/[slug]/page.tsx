import { getPostBySlug } from '~/utils/post';

interface PostPageParams {
  slug: string;
}

interface PostPageProps {
  params: PostPageParams;
}

export default async function PostPage({ params }: PostPageProps) {
  const { content } = await getPostBySlug(params.slug);

  return content;
}
