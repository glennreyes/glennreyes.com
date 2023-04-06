import type { Metadata } from 'next';
import { AppearancesFeed } from '~/components/appearances/AppearancesFeed';
import { Divider } from '~/components/ui/elements/Divider';
import { TagCloud } from '~/components/ui/elements/TagCloud';
import { Page } from '~/components/ui/layout/Page';
import { ActionLink } from '~/components/ui/link/ActionLink';
import { MDXRemoteContent } from '~/components/ui/mdx/MDXRemoteContent';
import { H2 } from '~/components/ui/typography/H2';
import { getAllTalks, getTalkBySlug } from '~/lib/talks';

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
    title: talk.title,
  };
}

export async function generateStaticParams() {
  const allTalks = await getAllTalks();

  return allTalks.map((talk) => ({ slug: talk.slug }));
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
