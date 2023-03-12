import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getPostSlugs } from '~/utils/post';

export async function generatStaticParams() {
  const slugs = await getPostSlugs();

  return slugs.map((slug) => ({ slug }));
}

interface PostPageParams {
  slug: string;
}

interface PostPageProps {
  params: PostPageParams;
}

export default async function PostPage({ params }: PostPageProps) {
  const { source } = await getPostBySlug(params.slug);

  // @ts-expect-error Server Component
  return <MDXRemote source={source} />;
}
