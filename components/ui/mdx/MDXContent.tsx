import { useMDXComponent } from 'next-contentlayer/hooks';
import { components } from '~/lib/mdx';

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const MDXComponent = useMDXComponent(code);

  return <MDXComponent components={components} />;
}
