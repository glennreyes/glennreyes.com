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
      <Page.Header lead="A few parts of the same life.">
        Hey, I&apos;m Glenn Reyes.
      </Page.Header>
      <section className="grid gap-10 md:grid-cols-2">
        <div className="aspect-portrait relative overflow-hidden rounded-4xl">
          <Image
            alt="Glenn wearing a diving mask in clear water above a reef"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
            src="/media/freediving/portrait.webp"
          />
        </div>
        <div className="grid content-center gap-7">
          <p>
            I&apos;m a software engineer based in Vienna. I enjoy making things
            that feel clear, considered, and useful.
          </p>
          <p>
            Freediving is a big part of my life. I love the quiet below the
            surface, exploring with a camera, and having a reason to slow down.
          </p>
          <p>
            On land, I run, do HYROX, and make room for whatever keeps me
            moving. There are a few marathons ahead in 2027.
          </p>
          <p className="text-muted-foreground">
            I also speak, teach, play guitar, and spend time with the people
            closest to me.
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
        <SectionLink href="/work">Work</SectionLink>
      </div>
    </Page>
  );
}
