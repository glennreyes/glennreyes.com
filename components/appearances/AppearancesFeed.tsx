import { Feed } from '~/components/ui/feed/Feed';
import { FeedCard } from '~/components/ui/feed/FeedCard';
import { getAppearances } from '~/lib/appearances';

export async function AppearancesFeed() {
  const { upcoming, past } = await getAppearances();

  return (
    <>
      <Feed title="Upcoming">
        {upcoming.map((appearance) => (
          <FeedCard
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
      <Feed title="Past">
        {past.map((appearance) => (
          <FeedCard
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
    </>
  );
}
