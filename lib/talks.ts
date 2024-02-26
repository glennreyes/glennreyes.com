import { prisma } from '@/lib/prisma';
import { cache } from 'react';

export const getAllTalks = cache(() =>
  prisma.talk.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      abstract: true,
      slug: true,
      status: true,
      title: true,
    },
  }),
);

export const getTalkBySlug = cache((slug: string) =>
  prisma.talk.findUniqueOrThrow({
    select: {
      abstract: true,
      appearances: {
        orderBy: {
          event: {
            startDate: 'desc',
          },
        },
        select: {
          event: {
            select: {
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
          },
        },
      },
      slug: true,
      tags: true,
      title: true,
    },
    where: { slug },
  }),
);
