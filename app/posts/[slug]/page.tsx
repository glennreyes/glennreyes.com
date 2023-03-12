import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export async function generatStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

interface PostPageParams {
  slug: string;
}

interface PostPageProps {
  params: PostPageParams;
}

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find(({ slug }) => slug === params.slug);

  if (!post) {
    notFound();
  }

  return <div dangerouslySetInnerHTML={{ __html: post.body.html }} />;
}
