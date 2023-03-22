import { getAppearances } from '~/lib/appearances';
import { Feed } from '../ui/layout/Feed';

export async function AppearancesFeed() {
  const appearances = await getAppearances();
  const today = new Date();
  const upcoming = appearances.filter((appearance) => appearance.date > today);
  const past = appearances.filter((appearance) => appearance.date <= today);

  return (
    <>
      {upcoming.length && (
        <Feed title="Upcoming">
          {upcoming.map((appearance) => (
            <Feed.Card
              date={appearance.date}
              description={`${appearance.talk ? 'Talk: ' : appearance.workshop && 'Workshop: '}${
                appearance.talk?.title ?? appearance.workshop?.title ?? ''
              }`}
              key={appearance.slug}
              link={`/appearances/${appearance.slug}`}
              title={appearance.event.name}
            />
          ))}
        </Feed>
      )}
      {past.length && (
        <Feed title="Past">
          {past.map((appearance) => (
            <Feed.Card
              date={appearance.date}
              description={`${appearance.talk ? 'Talk: ' : appearance.workshop && 'Workshop: '}${
                appearance.talk?.title ?? appearance.workshop?.title ?? ''
              }`}
              key={appearance.slug}
              link={`/appearances/${appearance.slug}`}
              title={appearance.event.name}
            />
          ))}
        </Feed>
      )}
    </>
  );
}
