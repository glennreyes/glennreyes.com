import { Suspense } from 'react';

import { Hero } from '@/components/home/hero';
import { Posts } from '@/components/home/posts';
import { PostsLoading } from '@/components/home/posts-loading';
import { Newsletter } from '@/components/newsletter/newsletter';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { projects } from '@/lib/site-content';

export default function RootPage() {
  return (
    <Page>
      <Hero />
      <section
        aria-labelledby="projects"
        className="grid gap-4 border-t pt-6 md:grid-cols-4 md:gap-8"
      >
        <h2 className="scroll-mt-28 font-medium" id="projects">
          Selected projects
        </h2>
        <ul className="grid gap-6 md:col-span-3 md:grid-cols-3">
          {projects.map((project) => (
            <li className="grid content-start gap-1" key={project.slug}>
              <h3>
                <SectionLink href={project.href}>{project.title}</SectionLink>
              </h3>
              <p className="text-muted-foreground">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <div className="grid gap-10 border-t pt-6 lg:grid-cols-2 lg:gap-20">
        <section className="grid content-start gap-3">
          <div className="flex flex-wrap items-center justify-between gap-x-4">
            <h2 className="font-medium">Writing</h2>
            <SectionLink href="/posts">All posts</SectionLink>
          </div>
          <Suspense fallback={<PostsLoading />}>
            <Posts />
          </Suspense>
        </section>
        <section className="grid content-start gap-3">
          <h2 className="font-medium">Speaking & teaching</h2>
          <div className="flex flex-wrap gap-x-6">
            <SectionLink href="/talks">Talks & recordings</SectionLink>
            <SectionLink href="/workshops">Workshops</SectionLink>
            <SectionLink href="/appearances">Appearances</SectionLink>
          </div>
        </section>
      </div>
      <Newsletter />
    </Page>
  );
}
