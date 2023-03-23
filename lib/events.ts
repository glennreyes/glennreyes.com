import { prisma } from '~/lib/prisma';

export function getAllEvents() {
  return prisma.event.findMany({
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
  });
}
