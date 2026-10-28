import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
export const metadata: Metadata = {
  title: 'HYROX',
  description: 'Running meets strength. HYROX with Glenn Reyes.',
};
export default function HyroxPage() {
  return (
    <Page>
      <header className="flex flex-wrap justify-between gap-4">
        <h1 className="font-medium">HYROX.</h1>
        <p className="text-muted-foreground">Running meets strength.</p>
      </header>
      <figure className="grid max-w-xl gap-3">
        <div className="aspect-portrait relative overflow-hidden rounded-md">
          <Image
            alt="Glenn pushing a weighted sled down the gym track"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
            src="/media/sport/hyrox.webp"
          />
        </div>
        <figcaption className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-muted-foreground">October 2026</p>
          <SectionLink href="https://www.instagram.com/glnnreyes/reel/DeG4OCCtiGY/">
            Watch the session
          </SectionLink>
        </figcaption>
      </figure>
      <SectionLink href="/sport/running">Running</SectionLink>
    </Page>
  );
}
