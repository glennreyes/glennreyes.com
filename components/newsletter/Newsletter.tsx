import type { ReactNode } from 'react';
import { Card } from '../ui/layout/card';
import { H4 } from '../ui/typography/h4';
import { Paragraph } from '../ui/typography/paragraph';
import { NewsletterForm } from './newsletter-form';

interface NewsletterProps {
  children?: ReactNode;
  title?: string;
}

export function Newsletter({
  children = 'Get subscribed for latest news and updates. No spam, unsubscribe at any time.',
  title = 'Stay in the loop',
}: NewsletterProps) {
  return (
    <Card as="section">
      <div className="grid max-w-md gap-8">
        <Card.Body>
          <H4 as="h2">{title}</H4>
          <Paragraph className="text-sm">{children}</Paragraph>
        </Card.Body>
        <Card.Body>
          <NewsletterForm />
        </Card.Body>
      </div>
    </Card>
  );
}
