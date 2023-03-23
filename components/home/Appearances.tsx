import { getTime } from 'date-fns';
import Link from 'next/link';
import { getAppearances } from '~/lib/appearances';
import { DateDisplay } from '../ui/elements/DateDisplay';
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
  const upcoming = appearances
    .filter((appearance) => appearance.date > today)
    .sort((a, b) => getTime(b.date) - getTime(a.date));
  const past = appearances.filter((appearance) => appearance.date <= today);

  return (
    <Section>
      <H4 as="h2">Appearances</H4>
      <Card>
        <div className="grid gap-6">
          <div className="grid gap-6">
            <h3 className="text-xs font-bold uppercase text-emerald-700/90">Upcoming</h3>
            <ol className="grid gap-6">
              {upcoming.map((appearance) => {
                const type = appearance.talk ? 'Talk' : appearance.workshop ? 'Workshop' : undefined;
                const title = appearance.talk?.title ?? appearance.workshop?.title;

                return (
                  <li key={appearance.slug}>
                    <dl className="grid gap-1">
                      <dt className="sr-only">Date</dt>
                      <dd className="text-sm text-stone-400">
                        <DateDisplay value={appearance.date} />
                      </dd>
                      <dt className="sr-only">Event</dt>
                      <dd className="text-sm font-medium">{appearance.event.name}</dd>
                      {type && title && (
                        <>
                          <dt className="sr-only">{type}</dt>
                          <dd className="text-sm text-stone-500">{title}</dd>
                        </>
                      )}
                    </dl>
                  </li>
                );
              })}
            </ol>
          </div>
          <hr className="border-t border-stone-100" />
          <div className="grid gap-4">
            <h3 className="text-xs font-bold uppercase text-emerald-700/90">Past</h3>
            <ol className="grid gap-6">
              {past.map((appearance) => {
                const type = appearance.talk ? 'Talk' : appearance.workshop ? 'Workshop' : undefined;
                const title = appearance.talk?.title ?? appearance.workshop?.title;

                return (
                  <li key={appearance.slug}>
                    <dl className="grid gap-1">
                      <dt className="sr-only">Date</dt>
                      <dd className="text-sm text-stone-400">
                        <DateDisplay value={appearance.date} />
                      </dd>
                      <dt className="sr-only">Event</dt>
                      <dd className="text-sm font-medium">{appearance.event.name}</dd>
                      {type && title && (
                        <>
                          <dt className="sr-only">{type}</dt>
                          <dd className="text-sm text-stone-500">{title}</dd>
                        </>
                      )}
                    </dl>
                  </li>
                );
              })}
            </ol>
          </div>
          <Link className="flex items-center gap-1 text-sm font-semibold text-stone-400" href="/appearances">
            All Appearances
          </Link>
        </div>
      </Card>
    </Section>
  );
}
