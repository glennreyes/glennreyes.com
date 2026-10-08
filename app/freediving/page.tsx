import type { Metadata } from 'next';
import { MediaGallery } from '@/components/site/media-gallery';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { freedivingMedia } from '@/lib/site-content';
export const metadata: Metadata = {
  title: 'Freediving',
  description:
    'A little quiet below the surface. Freediving films and photographs by Glenn Reyes.',
};
export default function FreedivingPage() {
  return (
    <Page>
      <header className="grid gap-8 md:grid-cols-2">
        <div className="grid content-start gap-4">
          <p className="text-muted-foreground">01 / In the water</p>
          <h1 className="font-medium">Freediving.</h1>
        </div>
        <div className="grid max-w-lg gap-5">
          <p>Some of my favourite moments happen on a single breath.</p>
          <p className="text-muted-foreground">
            Exploring reefs, practising on the line, and taking a camera along.
            These are a few moments from the water.
          </p>
        </div>
      </header>
      <MediaGallery items={freedivingMedia} />
      <section
        className="bg-foreground text-background grid gap-8 rounded-4xl p-8 md:grid-cols-2 md:p-12"
        id="unitydive"
      >
        <div className="grid content-start gap-3">
          <p>In the making</p>
          <h2 className="font-medium">Unitydive</h2>
        </div>
        <div className="grid gap-6">
          <p>
            I&apos;m building something around freediving. A meeting point for
            the things I love doing and the things I love making.
          </p>
          <p>More to come.</p>
          <div>
            <SectionLink href="/work">What else I&apos;m building</SectionLink>
          </div>
        </div>
      </section>
    </Page>
  );
}
