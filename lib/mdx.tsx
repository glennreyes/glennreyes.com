import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import { Link } from '~/components/ui/elements/Link';
import { H1 } from '~/components/ui/typography/H1';
import { H2 } from '~/components/ui/typography/H2';
import { H3 } from '~/components/ui/typography/H3';
import { H4 } from '~/components/ui/typography/H4';
import { Lead } from '~/components/ui/typography/Lead';

export const components: MDXComponents = {
  Image: (props) => (
    <figure className="-mx-4 sm:mx-0">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image className="sm:rounded-[1.75rem]" {...props} />
    </figure>
  ),
  Lead,
  a: ({ href, ...props }) => (href ? <Link href={href} {...props} /> : null),
  h1: (props) => <H1 className="not-prose" {...props} />,
  h2: (props) => <H2 className="not-prose" {...props} />,
  h3: (props) => <H3 className="not-prose" {...props} />,
  h4: (props) => <H4 className="not-prose" {...props} />,
  h5: () => null,
  h6: () => null,
  pre: (props) => <pre className="-mx-4 rounded-none px-4 py-8 sm:mx-0 sm:rounded-[1.75rem] sm:p-8" {...props} />,
};
