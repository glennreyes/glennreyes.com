import { Card } from '~/components/ui/layout/Card';
import { Section } from '~/components/ui/layout/Section';
import { H4 } from '~/components/ui/typography/H4';

export function Newsletter() {
  return (
    <Card>
      <Section>
        <div className="grid gap-3">
          <H4 as="h2">Stay in the loop</H4>
          <p className="text-stone-500">
            Be the first to know when I publish something new or have updates to share. No spam, and unsubscribe at any
            time.
          </p>
        </div>
      </Section>
    </Card>
  );
}
