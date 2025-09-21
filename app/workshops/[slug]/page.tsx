import type { Metadata } from 'next';

import type { PageProps } from '@/types/next';

import { AppearancesFeed } from '@/components/appearances/appearances-feed';
import { Divider } from '@/components/ui/elements/divider';
import { TagCloud } from '@/components/ui/elements/tag-cloud';
import { Page } from '@/components/ui/layout/page';
import { ActionLink } from '@/components/ui/link/action-link';
import { MDXContent } from '@/components/ui/mdx/mdx-content';
import { H2 } from '@/components/ui/typography/h2';
import { getAllWorkshops, getWorkshopBySlug } from '@/lib/workshops';

export const revalidate = 3600;

export const generateMetadata = async (
  props: PageProps<'/workshops/[slug]'>,
): Promise<Metadata> => {
  const params = await props.params;
  const workshop = await getWorkshopBySlug(params.slug);

  return {
    title: workshop.title,
  };
};

export const generateStaticParams = async () => {
  const allWorkshops = await getAllWorkshops();

  return allWorkshops.map((workshop) => ({ slug: workshop.slug }));
};

export default async function WorkshopPage(
  props: PageProps<'/workshops/[slug]'>,
) {
  const params = await props.params;
  const workshop = await getWorkshopBySlug(params.slug);
  const events = workshop.appearances.map((appearance) => appearance.event);

  return (
    <Page>
      <Page.Header lead={<TagCloud tags={workshop.tags} />} meta="Workshop">
        {workshop.title}
      </Page.Header>
      <Page.Body>
        <MDXContent source={workshop.description} />
        {workshop.curriculum !== null && (
          <MDXContent source={workshop.curriculum} />
        )}
        {events.length > 0 && (
          <>
            <Divider />
            <H2>Appearances</H2>
            <AppearancesFeed events={events}>
              <ActionLink href="/appearances">All Appearances</ActionLink>
            </AppearancesFeed>
          </>
        )}
      </Page.Body>
    </Page>
  );
}
