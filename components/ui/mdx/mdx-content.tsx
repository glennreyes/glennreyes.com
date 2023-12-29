import { getMDXComponent } from 'next-contentlayer/hooks';
import { components } from '@/lib/mdx';

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const MDXComponent = getMDXComponent(code);

  return <MDXComponent components={components} />;
}
