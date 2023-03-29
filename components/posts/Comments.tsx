import { email, twitter } from '~/lib/constants';
import { Link } from '../ui/elements/Link';
import { Card } from '../ui/layout/Card';
import { H4 } from '../ui/typography/H4';
import { Giscus } from './Giscus';

export function Comments() {
  return (
    <Card as="section">
      <Card.Body>
        <div className="grid gap-8">
          <div className="grid gap-4">
            <H4 as="h2">Comments</H4>
            <p className="lead text-sm text-stone-500">
              What do you think about this article? Have you had a similar experience? Share your thoughts in the
              comments below!
            </p>
          </div>
          <Giscus />
          <div className="prose prose-stone">
            <p className="lead text-sm text-stone-500">
              All comments are stored as{' '}
              <Link href="https://github.com/glennreyes/glennreyes.com/discussions">discussions on GitHub</Link> via{' '}
              <Link href="https://giscus.app">giscus</Link>, so feel free to comment there directly. Alternatively, you
              can reach out to me on <Link href={`https://twitter.com/${twitter}`}>Twitter</Link> or send me an{' '}
              <Link href={`mailto:${email}`}>email</Link>. I'm always happy to hear from my readers!
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
