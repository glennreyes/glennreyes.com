import type { ComponentPropsWithoutRef } from 'react';
import { AppearancesFeed } from '~/components/appearances/AppearancesFeed';
import { ActionLink } from '~/components/ui/elements/ActionLink';
import { H2 } from '../ui/typography/H2';

type TalkAppearancesProps = ComponentPropsWithoutRef<typeof AppearancesFeed>;

export function TalkAppearances({ events }: TalkAppearancesProps) {
  return (
    <>
      <H2>Appearances</H2>
      <div className="not-prose">
        <AppearancesFeed events={events}>
          <ActionLink href="/appearances">All Appearances</ActionLink>
        </AppearancesFeed>
      </div>
    </>
  );
}
