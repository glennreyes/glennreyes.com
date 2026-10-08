import Image from 'next/image';
import { Suspense } from 'react';
import speaking from '@/assets/images/speaking.jpg';
import { Hero } from '@/components/home/hero';
import { Posts } from '@/components/home/posts';
import { PostsLoading } from '@/components/home/posts-loading';
import { Newsletter } from '@/components/newsletter/newsletter';
import { InstagramFeed } from '@/components/site/instagram-feed';
import { MediaCard } from '@/components/site/media-card';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { freedivingMedia } from '@/lib/site-content';
export default function RootPage() {
  const reef = freedivingMedia.find((media) => media.id === 'reef');
  return (
    <Page>
      <Hero />
      <section className="grid gap-8 pt-6" id="explore">
        <div className="flex flex-wrap justify-between gap-4 border-t pt-7">
          <h2>Three ways to get to know me.</h2>
          <span className="text-muted-foreground">
            In the water. On the move. At work.
          </span>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="grid gap-6">
            {reef !== undefined ? (
              <MediaCard className="h-80" media={reef} />
            ) : null}
            <div className="grid gap-4 px-3">
              <p className="text-muted-foreground">01 / In the water</p>
              <h3 className="font-medium">Freediving</h3>
              <p>
                One breath, a little perspective, and a camera along for the
                ride.
              </p>
              <div>
                <SectionLink href="/freediving">Below the surface</SectionLink>
              </div>
            </div>
          </div>
          <div className="bg-foreground text-background flex flex-col justify-between gap-12 rounded-4xl p-8 lg:mt-16">
            <span>02 / On the move</span>
            <div className="grid gap-6">
              <div className="flex flex-wrap gap-2">
                <span className="border-background/40 rounded-full border px-4 py-2">
                  Running
                </span>
                <span className="border-background/40 rounded-full border px-4 py-2">
                  HYROX
                </span>
              </div>
              <h3 className="font-medium">Keep showing up.</h3>
              <p>
                Running, strength, and everything in between. A few marathons on
                the horizon in 2027.
              </p>
              <div>
                <SectionLink href="/sport">Life on the move</SectionLink>
              </div>
            </div>
            <span>One session at a time.</span>
          </div>
          <div className="grid gap-6 lg:mt-32">
            <div className="relative h-64 overflow-hidden rounded-4xl">
              <Image
                alt="Glenn speaking onstage at a software engineering conference"
                className="object-cover"
                fill
                placeholder="blur"
                sizes="(max-width: 1023px) 100vw, 33vw"
                src={speaking}
              />
            </div>
            <div className="grid gap-4 px-3">
              <p className="text-muted-foreground">03 / Making things</p>
              <h3 className="font-medium">Software & ideas</h3>
              <p>
                Thoughtful products, AI interfaces, and sharing what I learn
                along the way.
              </p>
              <div>
                <SectionLink href="/work">Explore my work</SectionLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-8 border-t pt-8 md:grid-cols-5">
        <div className="grid content-start gap-4 md:col-span-2">
          <h2>Notes along the way.</h2>
          <p className="text-muted-foreground max-w-sm">
            Things I&apos;m making, thinking about, and learning.
          </p>
          <div>
            <SectionLink href="/posts">All writing</SectionLink>
          </div>
        </div>
        <div className="md:col-span-3">
          <Suspense fallback={<PostsLoading />}>
            <Posts />
          </Suspense>
        </div>
      </section>
      <Suspense fallback={null}>
        <InstagramFeed />
      </Suspense>
      <div className="max-w-xl">
        <Newsletter />
      </div>
    </Page>
  );
}
