import { Suspense } from 'react';

import { Hero } from '@/components/home/hero';
import { Posts } from '@/components/home/posts';
import { PostsLoading } from '@/components/home/posts-loading';
import { ProjectCards } from '@/components/site/project-cards';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';

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
        <div className="md:col-span-3">
          <ProjectCards />
        </div>
      </section>
      <section
        aria-labelledby="writing"
        className="grid gap-4 border-t pt-6 md:grid-cols-4 md:gap-8"
      >
        <h2
          className="flex min-h-11 items-center self-start font-medium"
          id="writing"
        >
          Writing
        </h2>
        <div className="grid gap-3 md:col-span-3">
          <Suspense fallback={<PostsLoading />}>
            <Posts />
          </Suspense>
          <SectionLink href="/posts">All posts</SectionLink>
        </div>
      </section>
      <section
        aria-labelledby="speaking"
        className="grid gap-4 border-t pt-6 md:grid-cols-4 md:gap-8"
      >
        <h2
          className="flex min-h-11 items-center self-start font-medium"
          id="speaking"
        >
          Speaking & teaching
        </h2>
        <div className="grid gap-2 md:col-span-3">
          <SectionLink href="/talks">Talks & recordings</SectionLink>
          <SectionLink href="/workshops">Workshops</SectionLink>
          <SectionLink href="/appearances">Appearances</SectionLink>
        </div>
      </section>
    </Page>
  );
}
