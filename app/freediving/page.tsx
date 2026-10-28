import type { Metadata } from 'next';
import { MediaGallery } from '@/components/site/media-gallery';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { freedivingMedia } from '@/lib/site-content';
export const metadata: Metadata = {
  title: 'Freediving',
  description: 'Freediving films and photographs by Glenn Reyes.',
};
export default function FreedivingPage() {
  return (
    <Page>
      <header className="flex flex-wrap justify-between gap-4">
        <h1 className="font-medium">Freediving.</h1>
        <p className="text-muted-foreground">
          One breath. A different perspective.
        </p>
      </header>
      <MediaGallery items={freedivingMedia} />
      <section
        className="grid gap-5 border-t pt-8 md:grid-cols-2"
        id="unitydive"
      >
        <div className="flex items-baseline gap-4">
          <h2 className="font-medium">Unitydive</h2>
          <span className="text-muted-foreground">In the making</span>
        </div>
        <div className="grid gap-3">
          <p>A new project around freediving. More soon.</p>
          <SectionLink href="/tech">Other projects</SectionLink>
        </div>
      </section>
    </Page>
  );
}
