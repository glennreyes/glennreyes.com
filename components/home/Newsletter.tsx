import type { ReactNode } from 'react';
import { NewsletterForm } from '../newsletter/NewsletterForm';
import { Card } from '../ui/layout/Card';
import { H4 } from '../ui/typography/H4';

interface NewsletterProps {
  children?: ReactNode;
  title?: string;
}

export function Newsletter({
  children = 'Get subscribed for latest news and updates. No spam, unsubscribe at any time.',
  title = 'Stay in the loop',
}: NewsletterProps) {
  return (
    <Card>
      <div className="grid max-w-lg gap-8">
        <Card.Body>
          <H4 as="h2">{title}</H4>
          <p className="text-sm text-stone-500">{children}</p>
        </Card.Body>
        <Card.Body>
          <NewsletterForm />
        </Card.Body>
      </div>
    </Card>
  );
}
