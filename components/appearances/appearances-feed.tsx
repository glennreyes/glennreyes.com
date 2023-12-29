import type { Event, Location } from '@prisma/client';
import type { ReactNode } from 'react';
import { Feed } from '../ui/layout/feed';
import { composePlaceByLocation } from '@/lib/place';

interface AppearancesFeedProps {
  children?: ReactNode;
  events: (Pick<Event, 'name' | 'slug' | 'startDate'> & {
    location: Pick<Location, 'city' | 'country' | 'state'>;
  })[];
}

export function AppearancesFeed({ children, events }: AppearancesFeedProps) {
  const today = new Date();
  const upcoming = events
    .filter((event) => event.startDate > today)
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  const past = events.filter((event) => event.startDate <= today);

  return (
    <div className="not-prose grid gap-12">
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
      {children}
    </div>
  );
}
