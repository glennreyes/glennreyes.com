import { Section } from '~/components/ui/layout/Section';
import { H2 } from '~/components/ui/typography/H2';

export function AppearancesSection() {
  return (
    <div className="lg:col-span-5">
      <div className="rounded-2xl border border-stone-100 p-6">
        <Section>
          <H2>Appearances</H2>

          <p>Coming soon!</p>
        </Section>
      </div>
    </div>
  );
}
