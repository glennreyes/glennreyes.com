import Image from 'next/image';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { instagramProfile, stravaProfile } from '@/lib/constants';

interface ChapterPreviewProps {
  chapter: 'freediving' | 'sport';
}

export function ChapterPreview({ chapter }: ChapterPreviewProps) {
  const underwater = chapter === 'freediving';
  return (
    <Page>
      <section className="grid gap-8 md:grid-cols-2 md:items-center md:gap-16">
        <div className="aspect-portrait bg-muted relative overflow-hidden rounded-xl">
          <Image
            alt={
              underwater
                ? 'A freediver above a school of jacks in clear blue water'
                : 'Glenn running alongside the river in Vienna'
            }
            className="object-cover"
            fill
            preload
            quality={90}
            sizes="(max-width: 767px) 100vw, 50vw"
            src={
              underwater
                ? '/media/freediving/jacks.webp'
                : '/media/sport/river.webp'
            }
          />
        </div>
        <div className="grid justify-items-start gap-6">
          <div className="grid gap-3">
            <h1 className="font-medium">
              {underwater ? 'Freediving.' : 'Running & fitness.'}
            </h1>
            <p>
              {underwater
                ? 'A different perspective, below the surface.'
                : 'Running, HYROX, and life away from the screen.'}
            </p>
            <p className="text-muted-foreground">
              More of this side of me, soon.
            </p>
          </div>
          <SectionLink href={underwater ? instagramProfile : stravaProfile}>
            {underwater
              ? 'Follow along on Instagram'
              : 'Follow along on Strava'}
          </SectionLink>
        </div>
      </section>
    </Page>
  );
}
