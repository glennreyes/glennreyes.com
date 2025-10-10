import { unstable_cache } from 'next/cache';
import { cache } from 'react';

import { db } from '@/lib/db';

const EVENT_URL_OVERRIDES: Record<string, string> = {
  '2023-01-reactjs-philippines':
    'https://www.meetup.com/reactjs-philippines/events/305645222',
};

export const getAllEvents = cache(
  unstable_cache(
    async () => {
      const allEvents = await db.query.events.findMany({
        columns: {
          name: true,
          slug: true,
          startDate: true,
        },
        orderBy: (events, { desc }) => [desc(events.startDate)],
        with: {
          appearances: {
            columns: {},
            with: {
              talk: {
                columns: {
                  title: true,
                },
              },
              workshop: {
                columns: {
                  title: true,
                },
              },
            },
          },
          location: {
            columns: {
              city: true,
              country: true,
              state: true,
            },
          },
        },
      });

      return allEvents;
    },
    ['all-events'],
    {
      revalidate: 86400, // 24 hours in seconds
      tags: ['events'],
    },
  ),
);

export const getEventBySlug = cache(async (slug: string) => {
  const event = await db.query.events.findFirst({
    where: (events, { eq }) => eq(events.slug, slug),
    with: {
      appearances: {
        columns: {
          date: true,
          length: true,
          recording: true,
          slug: true,
        },
        with: {
          talk: {
            columns: {
              abstract: true,
              slides: true,
              slug: true,
              tags: true,
              title: true,
            },
          },
          workshop: {
            columns: {
              repository: true,
              slides: true,
              slug: true,
              summary: true,
              title: true,
            },
          },
        },
      },
      location: {
        columns: {
          address: true,
          city: true,
          country: true,
          name: true,
          state: true,
          zip: true,
        },
      },
    },
  });

  if (!event) {
    throw new Error(`Event with slug "${slug}" not found`);
  }

  const overrideUrl = EVENT_URL_OVERRIDES[event.slug];

  if (overrideUrl) {
    return {
      ...event,
      url: overrideUrl,
    };
  }

  return event;
});
