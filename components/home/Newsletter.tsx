import { Card } from '../ui/layout/Card';
import { H4 } from '../ui/typography/H4';
import { NewsletterForm } from './NewsletterForm';

export function Newsletter() {
  return (
    <Card>
      <div className="grid gap-8">
        <Card.Body>
          <H4 as="h2">Stay in the loop</H4>
          <p className="text-sm text-stone-500">
            Get subscribed for latest news and updates. No spam, unsubscribe at any time.
          </p>
        </Card.Body>
        <Card.Body>
          <NewsletterForm />
        </Card.Body>
      </div>
    </Card>
  );
}
