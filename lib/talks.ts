import { prisma } from '@/lib/prisma';
import { cache } from 'react';

export const getAllTalks = cache(function getAllTalks() {
  return prisma.talk.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      abstract: true,
      slug: true,
      title: true,
    },
  });
});

export const getTalkBySlug = cache(function getTalkBySlug(slug: string) {
  return prisma.talk.findUniqueOrThrow({
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
  });
});
