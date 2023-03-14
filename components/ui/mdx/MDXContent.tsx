import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const MDXComponent = useMDXComponent(code);

  return <MDXComponent components={{ Image }} />;
}
