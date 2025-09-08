import { email, x } from '@/lib/constants';

import { InlineLink } from '../ui/link/inline-link';
import { H4 } from '../ui/typography/h4';
import { Paragraph } from '../ui/typography/paragraph';
import { Giscus } from './giscus';

export const Comments = () => (
  <div className="prose prose-slate dark:prose-invert max-w-none">
    <H4 asChild>
      <h2>Comments</h2>
    </H4>
    <Paragraph>
      What do you think about this article? Have you had a similar experience?
      Share your thoughts in the comments below!
    </Paragraph>
    <Giscus />
    <Paragraph>
      All comments are stored as{' '}
      <InlineLink href="https://github.com/glennreyes/glennreyes.com/discussions">
        discussions on GitHub
      </InlineLink>{' '}
      via <InlineLink href="https://giscus.app">giscus</InlineLink>, so feel
      free to comment there directly if preferred. Alternatively, you can reach
      out to me on{' '}
      <InlineLink href={`https://x.com/${x}`}>
        X (formerly known as Twitter)
      </InlineLink>{' '}
      or send me an <InlineLink href={`mailto:${email}`}>email</InlineLink>.
      I&apos;m always happy to hear from my readers!
    </Paragraph>
  </div>
);
