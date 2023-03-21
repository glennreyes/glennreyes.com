import { prisma } from '~/utils/prisma';

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
      <div className="grid grid-cols-4">
        <div className="border-l border-stone-100 px-8">
          <h2 className="sticky top-16 font-semibold text-emerald-700/90">Upcoming</h2>
        </div>
        <div className="col-span-3 grid gap-8 md:gap-12">
          {upcoming.map((appearance) => {
            const title = appearance.talk?.title ?? appearance.workshop?.title;

            return (
              <article className="grid gap-3" key={appearance.slug}>
                <p className="text-stone-400">
                  {appearance.talk ? 'Talk' : appearance.workshop ? 'Workshop' : null} at {appearance.event.name}
                </p>
                {title && <h3 className="text-lg font-semibold tracking-tight">{title}</h3>}
              </article>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-4">
        <div className="border-l border-stone-100 px-8">
          <h2 className="sticky top-16 font-semibold text-stone-500">Past</h2>
        </div>
        <div className="col-span-3 grid gap-8 md:gap-12">
          {past.map((appearance) => {
            const title = appearance.talk?.title ?? appearance.workshop?.title;

            return (
              <article className="grid gap-3" key={appearance.slug}>
                <p className="text-stone-400">
                  {appearance.talk ? 'Talk' : appearance.workshop ? 'Workshop' : null} at {appearance.event.name}
                </p>
                {title && <h3 className="text-lg font-semibold tracking-tight">{title}</h3>}
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
