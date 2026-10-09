import type { Metadata } from 'next';
import Image from 'next/image';
import speaking from '@/assets/images/speaking.jpg';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { projects } from '@/lib/site-content';
export const metadata: Metadata = {
  title: 'Tech',
  description: 'Software, AI, projects, talks, and workshops by Glenn Reyes.',
};
export default function TechPage() {
  return (
    <Page>
      <header className="grid gap-5 md:grid-cols-2">
        <h1 className="font-medium">Tech.</h1>
        <p>
          Software engineer. Exploring AI interfaces, building products, and
          sharing what I learn.
        </p>
      </header>
      <section className="grid gap-8 md:grid-cols-5">
        <div className="relative h-80 overflow-hidden rounded-md md:col-span-3">
          <Image
            alt="Glenn speaking at a conference"
            className="object-cover"
            fill
            placeholder="blur"
            sizes="(max-width: 767px) 100vw, 60vw"
            src={speaking}
          />
        </div>
        <div className="grid content-center gap-3 md:col-span-2">
          <h2 className="text-muted-foreground">Speaking & teaching</h2>
          <SectionLink href="/talks">Talks & recordings</SectionLink>
          <SectionLink href="/workshops">Workshops</SectionLink>
          <SectionLink href="/appearances">Appearances</SectionLink>
          <SectionLink href="/tech/ai">AI & interfaces</SectionLink>
        </div>
      </section>
      <section className="grid gap-6 border-t pt-8">
        <h2>Selected projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article className="grid content-start gap-3" key={project.slug}>
              <h3>
                <SectionLink href={project.href}>{project.title}</SectionLink>
              </h3>
              <p className="text-muted-foreground">{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Page>
  );
}
