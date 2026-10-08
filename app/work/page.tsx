import type { Metadata } from 'next';
import Image from 'next/image';
import speaking from '@/assets/images/speaking.jpg';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { projects } from '@/lib/site-content';
export const metadata: Metadata = {
  title: 'Work',
  description:
    'Software engineering, AI interfaces, projects, speaking, and workshops by Glenn Reyes.',
};
export default function WorkPage() {
  return (
    <Page>
      <Page.Header
        meta="03 / Making things"
        lead="Thoughtful software. Useful interfaces. Shared knowledge."
      >
        Work.
      </Page.Header>
      <section className="grid gap-10 md:grid-cols-2">
        <div className="grid content-start gap-6">
          <p>
            I&apos;m a software engineer working at the intersection of product,
            frontend architecture, and developer experience.
          </p>
          <p className="text-muted-foreground">
            Lately, I&apos;m exploring AI interfaces, MCP, and Generative UI. I
            build things, teach workshops, and share what I learn onstage.
          </p>
          <div>
            <SectionLink href="/work/ai">
              What I&apos;m exploring with AI
            </SectionLink>
          </div>
        </div>
        <div className="relative h-80 overflow-hidden rounded-4xl">
          <Image
            alt="Glenn speaking at a conference"
            className="object-cover"
            fill
            placeholder="blur"
            sizes="(max-width: 767px) 100vw, 50vw"
            src={speaking}
          />
        </div>
      </section>
      <section className="grid gap-6">
        <h2>Selected projects.</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              className="flex flex-col justify-between gap-10 rounded-4xl border p-8"
              key={project.slug}
            >
              <p className="text-muted-foreground">{project.label}</p>
              <div className="grid gap-4">
                <h3 className="font-medium">{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div>
                <SectionLink href={project.href}>Take a look</SectionLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-foreground text-background grid gap-8 rounded-4xl p-8 md:grid-cols-2 md:p-12">
        <div className="grid content-start gap-5">
          <h2>Sharing what I learn.</h2>
          <p>Conversations, conferences, and hands-on workshops.</p>
        </div>
        <div className="flex flex-wrap content-start gap-3">
          <SectionLink href="/talks">Talks & recordings</SectionLink>
          <SectionLink href="/workshops">Workshops</SectionLink>
          <SectionLink href="/appearances">Appearances</SectionLink>
          <SectionLink href="/posts">Writing</SectionLink>
        </div>
      </section>
    </Page>
  );
}
