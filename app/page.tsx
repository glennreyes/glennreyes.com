import { Suspense } from 'react';

import { Hero } from '@/components/home/hero';
import { Posts } from '@/components/home/posts';
import { PostsLoading } from '@/components/home/posts-loading';
import { Newsletter } from '@/components/newsletter/newsletter';
import { InstagramFeed } from '@/components/site/instagram-feed';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';

export default function RootPage() {
  return (
    <Page>
      <Hero />
      <div className="grid gap-12 border-t pt-8 lg:grid-cols-2 lg:gap-20">
        <section className="grid content-start gap-6">
          <div className="flex items-center justify-between gap-4">
            <h2>Writing</h2>
            <SectionLink href="/posts">All notes</SectionLink>
          </div>
          <Suspense fallback={<PostsLoading />}>
            <Posts />
          </Suspense>
        </section>
        <Newsletter />
      </div>
      <Suspense fallback={null}>
        <InstagramFeed />
      </Suspense>
    </Page>
  );
}
