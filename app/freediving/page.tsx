import type { Metadata } from 'next';
import { MediaCard } from '@/components/site/media-card';
import { MediaGallery } from '@/components/site/media-gallery';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { freedivingMedia } from '@/lib/site-content';
export const metadata: Metadata = {
  title: 'Freediving',
  description: 'Freediving films and photographs by Glenn Reyes.',
};
export default function FreedivingPage() {
  const cover = freedivingMedia.find((media) => media.id === 'sardines');
  return (
    <Page>
      <header className="relative isolate grid min-h-80 content-end gap-3 overflow-hidden rounded-md bg-slate-950 p-7 text-white md:min-h-96 md:p-10">
        {cover !== undefined ? (
          <>
            <MediaCard
              className="absolute inset-0 -z-20 rounded-none"
              media={cover}
              priority
              showCaption={false}
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
          </>
        ) : null}
        <h1 className="font-medium">Freediving.</h1>
        <p>One breath. A different perspective.</p>
      </header>
      <section aria-labelledby="gallery" className="grid gap-5">
        <h2 id="gallery" className="scroll-mt-28 font-medium">
          Gallery
        </h2>
        <MediaGallery items={freedivingMedia} />
      </section>
      <section
        className="grid scroll-mt-28 gap-5 border-t pt-8 md:grid-cols-2"
        id="unitydive"
      >
        <div className="flex items-baseline gap-4">
          <h2 className="font-medium">Unitydive</h2>
          <span className="text-muted-foreground">In the making</span>
        </div>
        <div className="grid gap-3">
          <p>A new project around freediving. More soon.</p>
          <SectionLink href="/">Other projects</SectionLink>
        </div>
      </section>
    </Page>
  );
}
