import fs from 'fs/promises';
import { MDXRemote } from 'next-mdx-remote/rsc';

async function getPost(slug: string) {
  // TODO: Parse slug
  const source = await fs.readFile(`${process.cwd()}/content/posts/${slug}/index.mdx`, 'utf-8');

  return source;
}

interface PostPageParams {
  slug: string;
}

interface PostPageProps {
  params: PostPageParams;
}

export default async function PostPage({ params }: PostPageProps) {
  const source = await getPost(params.slug);

  // @ts-expect-error Server Component
  return <MDXRemote source={source} />;
}
