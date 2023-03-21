import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { H1 } from '~/components/ui/typography/H1';
import { Lead } from '~/components/ui/typography/Lead';

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const MDXComponent = useMDXComponent(code);

  return <MDXComponent components={{ H1, Image, Lead }} />;
}
