import { cache } from 'react';

import {
  appearanceHistory,
  newestAppearancesFirst,
} from '@/lib/appearance-history';
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
      appearances: appearanceHistory,
    },
  });

  if (!talk) {
    throw new Error(`Talk with slug "${slug}" not found`);
  }

  return {
    ...talk,
    appearances: newestAppearancesFirst(talk.appearances),
  };
});
