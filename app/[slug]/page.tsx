import { allPages } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from '~/hooks/useMDXComponent';

export async function generatStaticParams() {
  return allPages.map((page) => ({ slug: page.slug }));
}

interface PageParams {
  slug: string;
}

interface PageProps {
  params: PageParams;
}

export default function Page({ params }: PageProps) {
  const page = allPages.find(({ slug }) => slug === params.slug);
  const MDXComponent = useMDXComponent(page?.body.code);

  if (!MDXComponent) {
    notFound();
  }

  return <MDXComponent />;
}
