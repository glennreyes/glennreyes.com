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
          location: {
            select: {
              address: true,
              city: true,
              country: true,
              name: true,
              state: true,
              type: true,
              zip: true,
            },
          },
          name: true,
          slug: true,
          type: true,
          url: true,
        },
      },
      length: true,
      recording: true,
      slug: true,
      talk: {
        select: {
          abstract: true,
          slides: true,
          slug: true,
          status: true,
          tags: true,
          title: true,
        },
      },
      workshop: {
        select: {
          abstract: true,
          repository: true,
          slides: true,
          slug: true,
          status: true,
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
