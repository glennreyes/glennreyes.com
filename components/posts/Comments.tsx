import { InlineLink } from '../ui/link/InlineLink';
import { H4 } from '../ui/typography/H4';
import { Paragraph } from '../ui/typography/Paragraph';
import { Giscus } from './Giscus';
import { email, x } from '@/lib/constants';

export function Comments() {
  return (
    <div className="prose prose-sm prose-slate max-w-none dark:prose-invert">
      <H4 as="h2">Comments</H4>
      <Paragraph>
        What do you think about this article? Have you had a similar experience? Share your thoughts in the comments
        below!
      </Paragraph>
      <Giscus />
      <Paragraph>
        All comments are stored as{' '}
        <InlineLink href="https://github.com/glennreyes/glennreyes.com/discussions">discussions on GitHub</InlineLink>{' '}
        via <InlineLink href="https://giscus.app">giscus</InlineLink>, so feel free to comment there directly if
        preferred. Alternatively, you can reach out to me on{' '}
        <InlineLink href={`https://twitter.com/${x}`}>X (formerly known as Twitter)</InlineLink> or send me an{' '}
        <InlineLink href={`mailto:${email}`}>email</InlineLink>. I'm always happy to hear from my readers!
      </Paragraph>
    </div>
  );
}
