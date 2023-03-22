import { Card } from '~/components/ui/layout/Card';
import { Section } from '~/components/ui/layout/Section';
import { H2 } from '~/components/ui/typography/H2';

export function Newsletter() {
  return (
    <Card>
      <Section>
        <div className="grid gap-3">
          <H2>Stay in the loop</H2>
          <p className="text-stone-500">
            Be the first to know when I publish something new or have updates to share. No spam, and unsubscribe at any
            time.
          </p>
        </div>
      </Section>
    </Card>
  );
}
