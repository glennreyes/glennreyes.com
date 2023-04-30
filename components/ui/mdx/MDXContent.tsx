import { components } from '@/lib/mdx';
import { getMDXComponent } from 'next-contentlayer/hooks';

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const MDXComponent = getMDXComponent(code);

  return <MDXComponent components={components} />;
}
