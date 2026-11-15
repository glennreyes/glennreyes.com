import { Suspense } from 'react';

import { Hero } from '@/components/home/hero';
import { Posts } from '@/components/home/posts';
import { PostsLoading } from '@/components/home/posts-loading';
import { ProjectCards } from '@/components/site/project-cards';
import { Newsletter } from '@/components/newsletter/newsletter';
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
      <div className="grid gap-10 border-t pt-6 lg:grid-cols-2 lg:gap-20">
        <section className="grid content-start gap-3">
          <h2 className="font-medium">Writing</h2>
          <Suspense fallback={<PostsLoading />}>
            <Posts />
          </Suspense>
          <SectionLink href="/posts">All posts</SectionLink>
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
