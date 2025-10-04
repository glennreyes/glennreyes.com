import type { Metadata } from 'next';

import type { PageProps } from '@/types/next';

import { AppearancesFeed } from '@/components/appearances/appearances-feed';
import { Divider } from '@/components/ui/elements/divider';
import { TagCloud } from '@/components/ui/elements/tag-cloud';
import { Page } from '@/components/ui/layout/page';
import { ActionLink } from '@/components/ui/link/action-link';
import { MDXContent } from '@/components/ui/mdx/mdx-content';
import { H2 } from '@/components/ui/typography/h2';
import { getAllTalks, getTalkBySlug } from '@/lib/talks';

export const revalidate = 3600;

export const generateMetadata = async (
  props: PageProps<'/talks/[slug]'>,
): Promise<Metadata> => {
  const params = await props.params;
  const talk = await getTalkBySlug(params.slug);

  return {
    title: talk.title,
  };
};

export const generateStaticParams = async () => {
  const allTalks = await getAllTalks();

  return allTalks.map((talk) => ({ slug: talk.slug }));
};

const TalkPage = async (props: PageProps<'/talks/[slug]'>) => {
  const params = await props.params;
  const talk = await getTalkBySlug(params.slug);
  const events = talk.appearances.map((appearance) => appearance.event);

  return (
    <Page>
      <Page.Header
        lead={<TagCloud tags={talk.tags} />}
        meta="Talk"
        viewTransitionName={`talk-${params.slug}`}
      >
        {talk.title}
      </Page.Header>
      <Page.Body>
        <MDXContent source={talk.abstract} />
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
};

export default TalkPage;
