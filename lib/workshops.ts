import { cache } from 'react';

import {
  appearanceHistory,
  newestAppearancesFirst,
} from '@/lib/appearance-history';
import { db } from '@/lib/db';

export const getAllWorkshops = cache(() =>
  db.query.workshops.findMany({
    columns: {
      slug: true,
      status: true,
      summary: true,
      title: true,
    },
    orderBy: (workshops, { asc }) => [asc(workshops.status)],
  }),
);

export const getWorkshopBySlug = cache(async (slug: string) => {
  const workshop = await db.query.workshops.findFirst({
    where: (workshops, { eq }) => eq(workshops.slug, slug),
    with: {
      appearances: appearanceHistory,
    },
  });

  if (!workshop) {
    throw new Error(`Workshop with slug "${slug}" not found`);
  }

  return {
    ...workshop,
    appearances: newestAppearancesFirst(workshop.appearances),
  };
});
