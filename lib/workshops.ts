import { cacheLife, cacheTag } from 'next/cache';
import { cache } from 'react';

import { db } from '@/lib/db';

export async function getAllWorkshops() {
  'use cache';
  cacheLife('days');
  cacheTag('workshops');

  return db.query.workshops.findMany({
    columns: {
      slug: true,
      status: true,
      summary: true,
      title: true,
    },
    orderBy: (workshops, { asc }) => [asc(workshops.status)],
  });
}

export const getWorkshopBySlug = cache(async (slug: string) => {
  const workshop = await db.query.workshops.findFirst({
    where: (workshops, { eq }) => eq(workshops.slug, slug),
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

  if (!workshop) {
    throw new Error(`Workshop with slug "${slug}" not found`);
  }

  const sortedAppearances = [...workshop.appearances].sort(
    (a, b) => b.event.startDate.getTime() - a.event.startDate.getTime(),
  );

  return {
    ...workshop,
    appearances: sortedAppearances,
  };
});
