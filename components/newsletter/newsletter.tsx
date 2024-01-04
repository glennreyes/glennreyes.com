import type { ReactNode } from 'react';

import { Card } from '../ui/layout/card';
import { H4 } from '../ui/typography/h4';
import { Paragraph } from '../ui/typography/paragraph';
import { NewsletterForm } from './newsletter-form';

interface NewsletterProps {
  children?: ReactNode;
  title?: string;
}

export const Newsletter = ({
  children = 'Get subscribed for latest news and updates. No spam, unsubscribe at any time.',
  title = 'Stay in the loop',
}: NewsletterProps) => <Card asChild>
      <section>
        <div className="grid max-w-md gap-8">
          <Card.Body>
            <H4 asChild>
              <h2>{title}</h2>
            </H4>
            <Paragraph className="text-sm">{children}</Paragraph>
          </Card.Body>
          <Card.Body>
            <NewsletterForm />
          </Card.Body>
        </div>
      </section>
    </Card>;
