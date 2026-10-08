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
  children = 'Occasional notes about things I’m building and learning. A little software, a little life.',
  title = 'Stay in the loop',
}: NewsletterProps) {
  return (
    <Card asChild>
      <section>
        <div className="grid max-w-md gap-8">
          <Card.Body>
            <H4 asChild>
              <h2>{title}</h2>
            </H4>
            <Paragraph>{children}</Paragraph>
          </Card.Body>
          <Card.Body>
            <NewsletterForm />
          </Card.Body>
        </div>
      </section>
    </Card>
  );
}
