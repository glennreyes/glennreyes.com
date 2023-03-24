import { Button } from '../ui/forms/Button';
import { Input } from '../ui/forms/Input';
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
            Get subscribed for news and updates. No spam, unsubscribe at any time.
          </p>
        </Card.Body>
        <Card.Body>
          <NewsletterForm>
            <div className="sm:flex-1">
              <Input
                aria-label="Email address"
                className="peer relative z-10 w-full sm:border-none sm:focus:ring-0"
                name="email"
                placeholder="Your email address"
                required
                type="email"
              />
              <span className="absolute inset-0 hidden rounded-[1.25rem] border border-stone-300 p-1 transition peer-focus:border-stone-400 peer-focus:ring-4 peer-focus:ring-teal-100 sm:block" />
            </div>
            <div className="relative grid">
              <Button>Subscribe</Button>
            </div>
          </NewsletterForm>
        </Card.Body>
      </div>
    </Card>
  );
}
