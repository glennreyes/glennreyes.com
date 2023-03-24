import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { H1 } from '../typography/H1';
import { Lead } from '../typography/Lead';

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const MDXComponent = useMDXComponent(code);

  return <MDXComponent components={{ H1, Image, Lead, pre: (props) => <pre className="p-6" {...props} /> }} />;
}
