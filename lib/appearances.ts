import { prisma } from '~/lib/prisma';

export async function getAppearances() {
  const appearances = await prisma.appearance.findMany({
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

  const today = new Date();
  const upcoming = appearances.filter((appearance) => appearance.date > today);
  const past = appearances.filter((appearance) => appearance.date <= today);

  return { past, upcoming };
}
