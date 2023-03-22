import { getTime } from 'date-fns';
import Link from 'next/link';
import { getAppearances } from '~/lib/appearances';
import { Card } from '../ui/layout/Card';
import { Section } from '../ui/layout/Section';
import { H4 } from '../ui/typography/H4';

export async function Appearances() {
  const allAppearances = await getAppearances();
  const today = new Date();
  const todayInMilliseconds = getTime(today);
  // Calculate the difference between each date and today's date
  const dateDistances = allAppearances.map((appearance) => Math.abs(getTime(appearance.date) - todayInMilliseconds));
  // Sort the appearances by their date distance to today's date and get the 5 closest ones
  const appearances = allAppearances
    .slice()
    .sort((a, b) => {
      const aDistance = dateDistances[allAppearances.indexOf(a)];
      const bDistance = dateDistances[allAppearances.indexOf(b)];

      if (aDistance === undefined || bDistance === undefined) {
        return 0;
      }

      return aDistance - bDistance;
    })
    .slice(0, 5);
  const upcoming = appearances.filter((appearance) => appearance.date > today);
  const past = appearances.filter((appearance) => appearance.date <= today);

  return (
    <Card>
      <Section>
        <H4 as="h2">Appearances</H4>
        <pre className="overflow-auto">{JSON.stringify({ past, upcoming }, null, 2)}</pre>
        <Link className="flex items-center gap-1 font-semibold text-stone-400" href="/appearances">
          All Appearances
        </Link>
      </Section>
    </Card>
  );
}
