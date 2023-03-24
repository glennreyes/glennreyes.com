import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { Link } from '../elements/Link';
import { H1 } from '../typography/H1';
import { Lead } from '../typography/Lead';

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const MDXComponent = useMDXComponent(code);

  return (
    <MDXComponent
      components={{
        H1,
        Image,
        Lead,
        a: ({ href, ...props }) => (href ? <Link href={href} {...props} /> : null),
        pre: (props) => <pre className="p-6" {...props} />,
      }}
    />
  );
}
