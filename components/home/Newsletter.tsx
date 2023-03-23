import { Card } from '../ui/layout/Card';
import { H4 } from '../ui/typography/H4';

export function Newsletter() {
  return (
    <Card>
      <div className="grid gap-3">
        <H4 as="h2">Stay in the loop</H4>
        <p className="text-sm text-stone-500">
          Be the first to know when I publish something new or have updates to share. No spam, and unsubscribe at any
          time.
        </p>
      </div>
    </Card>
  );
}
