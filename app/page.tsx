import { Hero } from '@/components/home/hero';
import { ProjectCards } from '@/components/site/project-cards';
import { Page } from '@/components/ui/layout/page';
import { Link } from '@/components/ui/link/link';

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
        aria-label="Writing, speaking, and teaching"
        className="border-t pt-6"
      >
        <ul className="grid gap-4 md:grid-cols-3">
          <li>
            <Link
              aria-describedby="writing-description"
              aria-labelledby="writing"
              className="hover:bg-accent focus-visible:bg-accent flex h-full flex-col gap-6 rounded-xl border p-6 transition-colors"
              href="/posts"
            >
              <div className="grid gap-3">
                <h2 className="scroll-mt-28 font-medium" id="writing">
                  Writing
                </h2>
                <p className="text-muted-foreground" id="writing-description">
                  Thoughts on software engineering, AI, and building for the
                  web.
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2">
                Read articles <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              aria-describedby="speaking-description"
              aria-labelledby="speaking"
              className="hover:bg-accent focus-visible:bg-accent flex h-full flex-col gap-6 rounded-xl border p-6 transition-colors"
              href="/talks"
            >
              <div className="grid gap-3">
                <h2 className="scroll-mt-28 font-medium" id="speaking">
                  Speaking
                </h2>
                <p className="text-muted-foreground" id="speaking-description">
                  Talks, live demos, and ideas shared with developer
                  communities.
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2">
                Explore talks <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              aria-describedby="teaching-description"
              aria-labelledby="teaching"
              className="hover:bg-accent focus-visible:bg-accent flex h-full flex-col gap-6 rounded-xl border p-6 transition-colors"
              href="/workshops"
            >
              <div className="grid gap-3">
                <h2 className="scroll-mt-28 font-medium" id="teaching">
                  Teaching
                </h2>
                <p className="text-muted-foreground" id="teaching-description">
                  Hands-on workshops for developers who learn by building.
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2">
                View workshops <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </Page>
  );
}
