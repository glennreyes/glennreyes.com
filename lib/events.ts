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

export function getEventBySlug(slug: string) {
  return prisma.event.findUniqueOrThrow({
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
              tags: true,
              title: true,
            },
          },
          workshop: {
            select: {
              abstract: true,
              repository: true,
              slides: true,
              title: true,
            },
          },
        },
      },
      location: {
        select: {
          city: true,
          country: true,
          name: true,
          state: true,
        },
      },
      name: true,
      slug: true,
      startDate: true,
    },
    where: { slug },
  });
}
