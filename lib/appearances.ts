import { prisma } from '~/lib/prisma';

export function getAppearances() {
  return prisma.appearance.findMany({
    orderBy: { date: 'desc' },
    select: {
      date: true,
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
        },
      },
      slug: true,
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
  });
}
