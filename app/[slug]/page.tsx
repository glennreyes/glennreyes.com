import { allPages } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

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

  if (!page) {
    notFound();
  }

  return <div dangerouslySetInnerHTML={{ __html: page.body.html }} />;
}
