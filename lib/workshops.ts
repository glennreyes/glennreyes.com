import { cache } from 'react';
import { prisma } from '~/lib/prisma';

export const getAllWorkshops = cache(function getAllWorkshops() {
  return prisma.workshop.findMany({
    orderBy: {
      status: 'asc',
    },
    select: {
      slug: true,
      summary: true,
      title: true,
    },
  });
});

export const getWorkshopBySlug = cache(function getWorkshopBySlug(slug: string) {
  return prisma.workshop.findUniqueOrThrow({
    select: {
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
      curriculum: true,
      description: true,
      slug: true,
      tags: true,
      title: true,
    },
    where: { slug },
  });
});
