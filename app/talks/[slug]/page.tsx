import type { Metadata } from 'next';
import { TalkAppearances } from '~/components/talks/TalkAppearances';
import { TagCloud } from '~/components/ui/elements/TagCloud';
import { Page } from '~/components/ui/layout/Page';
import { MDXRemoteContent } from '~/components/ui/mdx/MDXRemoteContent';
import { getAllEvents } from '~/lib/events';
import { composeTitle } from '~/lib/metadata';
import { getTalkBySlug } from '~/lib/talks';

export const revalidate = 3600;

interface GenerateMetadataConfigParams {
  slug: string;
}

interface GenerateMetadataConfig {
  params: GenerateMetadataConfigParams;
}

export async function generateMetadata({ params }: GenerateMetadataConfig): Promise<Metadata> {
  const talk = await getTalkBySlug(params.slug);

  return {
    title: composeTitle(talk.title),
  };
}

export async function generateStaticParams() {
  const allEvents = await getAllEvents();

  return allEvents.map((event) => ({ slug: event.slug }));
}

interface TalkPageParams {
  slug: string;
}

interface TalkPageProps {
  params: TalkPageParams;
}

export default async function TalkPage({ params }: TalkPageProps) {
  const talk = await getTalkBySlug(params.slug);
  const events = talk.appearances.map((appearance) => appearance.event);

  return (
    <Page>
      <Page.Header lead={<TagCloud tags={talk.tags} />} meta="Talk">
        {talk.title}
      </Page.Header>
      <Page.Body>
        <MDXRemoteContent source={talk.abstract} />
        {events.length > 0 && <TalkAppearances events={events} />}
      </Page.Body>
    </Page>
  );
}
