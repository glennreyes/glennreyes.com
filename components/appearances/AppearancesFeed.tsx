import type { Event, Location } from '@prisma/client';
import { composePlaceByLocation } from '~/lib/place';
import { Feed } from '../ui/layout/Feed';

interface AppearancesFeedProps {
  events: (Pick<Event, 'name' | 'slug' | 'startDate'> & {
    location: Pick<Location, 'city' | 'country' | 'state'>;
  })[];
}

export async function AppearancesFeed({ events }: AppearancesFeedProps) {
  const today = new Date();
  const upcoming = events.filter((event) => event.startDate > today);
  const past = events.filter((event) => event.startDate <= today);

  return (
    <>
      {upcoming.length > 0 && (
        <Feed title="Upcoming">
          {upcoming.map((event) => (
            <Feed.Item
              date={event.startDate}
              description={composePlaceByLocation(event.location)}
              key={event.slug}
              link={`/appearances/${event.slug}`}
              title={event.name}
            />
          ))}
        </Feed>
      )}
      {past.length > 0 && (
        <Feed title="Past">
          {past.map((event) => (
            <Feed.Item
              date={event.startDate}
              description={composePlaceByLocation(event.location)}
              key={event.slug}
              link={`/appearances/${event.slug}`}
              title={event.name}
            />
          ))}
        </Feed>
      )}
    </>
  );
}
