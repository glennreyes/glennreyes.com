import type { Metadata } from 'next';
import { AppearancesFeed } from '~/components/appearances/AppearancesFeed';
import { ActionLink } from '~/components/ui/elements/ActionLink';
import { TagCloud } from '~/components/ui/elements/TagCloud';
import { Page } from '~/components/ui/layout/Page';
import { MDXRemoteContent } from '~/components/ui/mdx/MDXRemoteContent';
import { H2 } from '~/components/ui/typography/H2';
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
        <H2>Appearances</H2>
        <div className="not-prose grid gap-8">
          {/* @ts-expect-error Server Components */}
          <AppearancesFeed events={events} />
          <ActionLink href="/appearances">All Appearances</ActionLink>
        </div>
      </Page.Body>
    </Page>
  );
}
