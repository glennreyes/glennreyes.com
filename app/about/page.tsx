import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { email } from '@/lib/constants';
export const metadata: Metadata = {
  title: 'About',
  description: 'Software engineer, freediver, runner. Get to know Glenn Reyes.',
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
          <p>
            Software engineer in Vienna. Freediver, runner, and HYROX
            enthusiast.
          </p>
          <p>
            I build products, explore AI interfaces, and teach what I learn.
          </p>
          <p className="text-muted-foreground">
            Away from a screen: the ocean, a run, a guitar, and my favourite
            people.
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
        <SectionLink href="/tech">Tech</SectionLink>
      </div>
    </Page>
  );
}
