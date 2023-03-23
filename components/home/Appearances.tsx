import { getTime } from 'date-fns';
import Link from 'next/link';
import { getAppearances } from '~/lib/appearances';
import { Divider } from '../ui/elements/Divider';
import { Card } from '../ui/layout/Card';
import { List } from '../ui/layout/List';
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
  const upcoming = appearances
    .filter((appearance) => appearance.date > today)
    .sort((a, b) => getTime(b.date) - getTime(a.date));
  const past = appearances.filter((appearance) => appearance.date <= today);

  return (
    <Section>
      <H4 as="h2">Appearances</H4>
      <Card>
        <div className="grid gap-8">
          <Card.Body title="Upcoming">
            <List as="ol">
              {upcoming.map((appearance) => (
                <List.Item key={appearance.slug}>
                  <Card.Item
                    date={appearance.date}
                    description={`${appearance.event.location.city}, ${
                      appearance.event.location.state ?? appearance.event.location.country
                    }`}
                    link={`/appearances/${appearance.slug}`}
                    title={appearance.event.name}
                  />
                </List.Item>
              ))}
            </List>
          </Card.Body>
          <Divider />
          <Card.Body title="Past">
            <List as="ol">
              {past.map((appearance) => (
                <List.Item key={appearance.slug}>
                  <Card.Item
                    date={appearance.date}
                    description={`${appearance.event.location.city}, ${
                      appearance.event.location.state ?? appearance.event.location.country
                    }`}
                    link={`/appearances/${appearance.slug}`}
                    title={appearance.event.name}
                  />
                </List.Item>
              ))}
            </List>
          </Card.Body>
          <Link
            className="rounded-2xl border border-stone-200 p-4 text-center text-sm font-medium leading-none text-stone-400 transition hover:border-stone-300 hover:text-stone-600"
            href="/appearances"
          >
            All Appearances
          </Link>
        </div>
      </Card>
    </Section>
  );
}
