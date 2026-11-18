import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { email } from '@/lib/constants';
export const metadata: Metadata = {
  title: 'About',
  description:
    'Glenn Reyes makes software in Vienna, teaches workshops, and spends time freediving and running.',
};
export default function AboutPage() {
  return (
    <Page>
      <Page.Header>Hey, I&apos;m Glenn Reyes.</Page.Header>
      <section className="grid gap-10 md:grid-cols-2">
        <div className="aspect-portrait relative overflow-hidden rounded-md">
          <Image
            alt="Glenn at the waterline below a rocky coastline"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
            src="/media/freediving/surface.webp"
          />
        </div>
        <div className="grid content-center gap-7">
          <p>I make software.</p>
          <p>
            I live in Vienna, where I build tools for the web. I also give talks
            and teach workshops.
          </p>
          <p className="text-muted-foreground">
            Away from the keyboard, I play guitar, run, train for HYROX, and
            freedive whenever I can get to the sea.
          </p>
          <div className="flex flex-wrap gap-3">
            <SectionLink href={'mailto:' + email}>Say hello</SectionLink>
            <SectionLink href="/uses">Things I use</SectionLink>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap gap-3">
        <SectionLink href="/freediving">Freediving</SectionLink>
        <SectionLink href="/sport">Sport</SectionLink>
        <SectionLink href="/">Tech</SectionLink>
      </div>
    </Page>
  );
}
