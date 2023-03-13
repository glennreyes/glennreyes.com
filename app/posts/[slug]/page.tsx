import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from '~/hooks/useMDXComponent';

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
  const MDXComponent = useMDXComponent(post?.body.code);

  if (!MDXComponent) {
    notFound();
  }

  return <MDXComponent />;
}
