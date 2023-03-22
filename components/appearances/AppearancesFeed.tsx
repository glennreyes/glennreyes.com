import { Feed } from '~/components/ui/feed/Feed';
import { FeedCard } from '~/components/ui/feed/FeedCard';
import { prisma } from '~/lib/prisma';

async function getAppearances() {
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

  const upcoming = appearances.filter((appearance) => appearance.date > new Date());
  const past = appearances.filter((appearance) => appearance.date <= new Date());

  return { past, upcoming };
}

export async function AppearancesFeed() {
  const { upcoming, past } = await getAppearances();

  return (
    <>
      <Feed title="Upcoming">
        {upcoming.map((appearance) => (
          <FeedCard
            date={appearance.date}
            description={`${appearance.talk ? 'Talk: ' : appearance.workshop && 'Workshop: '}${
              appearance.talk?.title ?? appearance.workshop?.title ?? ''
            }`}
            key={appearance.slug}
            link={`/appearances/${appearance.slug}`}
            title={appearance.event.name}
          />
        ))}
      </Feed>
      <Feed title="Past">
        {past.map((appearance) => (
          <FeedCard
            date={appearance.date}
            description={`${appearance.talk ? 'Talk: ' : appearance.workshop && 'Workshop: '}${
              appearance.talk?.title ?? appearance.workshop?.title ?? ''
            }`}
            key={appearance.slug}
            link={`/appearances/${appearance.slug}`}
            title={appearance.event.name}
          />
        ))}
      </Feed>
    </>
  );
}
