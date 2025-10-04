import { cache } from 'react';

import { db } from '@/lib/db';

export const getAllTalks = cache(() =>
  db.query.talks.findMany({
    columns: {
      abstract: true,
      slug: true,
      status: true,
      title: true,
    },
    orderBy: (talks, { desc }) => [desc(talks.createdAt)],
  }),
);

export const getTalkBySlug = cache(async (slug: string) => {
  const talk = await db.query.talks.findFirst({
    where: (talks, { eq }) => eq(talks.slug, slug),
    with: {
      appearances: {
        columns: {},
        with: {
          event: {
            columns: {
              name: true,
              slug: true,
              startDate: true,
            },
            with: {
              location: {
                columns: {
                  city: true,
                  country: true,
                  state: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!talk) {
    throw new Error(`Talk with slug "${slug}" not found`);
  }

  // Sort appearances by event startDate DESC
  const sortedAppearances = [...talk.appearances].sort(
    (a, b) => b.event.startDate.getTime() - a.event.startDate.getTime(),
  );

  return {
    ...talk,
    appearances: sortedAppearances,
  };
});
