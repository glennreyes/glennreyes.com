import { prisma } from '~/lib/prisma';

export function getAppearances() {
  return prisma.appearance.findMany({
    orderBy: { date: 'desc' },
    select: {
      date: true,
      event: {
        select: {
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
