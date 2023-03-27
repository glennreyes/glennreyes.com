import { prisma } from '~/lib/prisma';

export function getAllWorkshops() {
  return prisma.workshop.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      abstract: true,
      slug: true,
      title: true,
    },
  });
}

export function getWorkshopBySlug(slug: string) {
  return prisma.workshop.findUniqueOrThrow({
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
      title: true,
    },
    where: { slug },
  });
}
