import { prisma } from '@/lib/prisma';
import { cache } from 'react';

export const getAllEvents = cache(() =>
  prisma.event.findMany({
    orderBy: { startDate: 'desc' },
    select: {
      appearances: {
        select: {
          talk: {
            select: {
              title: true,
            },
          },
          workshop: {
            select: {
              title: true,
            },
          },
        },
      },
      location: {
        select: {
          city: true,
          country: true,
          state: true,
        },
      },
      name: true,
      slug: true,
      startDate: true,
    },
  }),
);

export const getEventBySlug = cache((slug: string) =>
  prisma.event.findUniqueOrThrow({
    select: {
      appearances: {
        select: {
          date: true,
          length: true,
          recording: true,
          slug: true,
          talk: {
            select: {
              abstract: true,
              slides: true,
              slug: true,
              tags: true,
              title: true,
            },
          },
          workshop: {
            select: {
              repository: true,
              slides: true,
              slug: true,
              summary: true,
              title: true,
            },
          },
        },
      },
      endDate: true,
      location: {
        select: {
          address: true,
          city: true,
          country: true,
          name: true,
          state: true,
          zip: true,
        },
      },
      name: true,
      slug: true,
      startDate: true,
      url: true,
    },
    where: { slug },
  }),
);
