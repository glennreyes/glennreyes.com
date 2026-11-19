import { ArrowUpRight } from 'lucide-react';

import { Hero } from '@/components/home/hero';
import { ProjectCards } from '@/components/site/project-cards';
import { Page } from '@/components/ui/layout/page';
import { Link } from '@/components/ui/link/link';

const sections = [
  {
    href: '/posts',
    title: 'Writing',
    description: 'Notes on AI, software, and the things I figure out while building.',
    action: 'Read posts',
  },
  {
    href: '/speaking',
    title: 'Speaking',
    description: 'Ideas, live demos, and conversations shared on stage.',
    action: 'Explore talks',
  },
  {
    href: '/workshops',
    title: 'Teaching',
    description: 'Hands-on workshops for people who learn by making.',
    action: 'View workshops',
  },
];

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
      <section aria-label="Writing, speaking and teaching" className="border-t pt-6">
        <ul className="grid gap-3 md:grid-cols-3">
          {sections.map(({ href, title, description, action }) => (
            <li key={href}>
              <Link
                className="group hover:bg-accent/70 focus-visible:bg-accent/70 grid h-full min-h-52 grid-rows-[auto_1fr_auto] gap-4 rounded-xl border p-6 transition-colors"
                href={href}
              >
                <h2 className="font-medium">{title}</h2>
                <p className="text-muted-foreground">{description}</p>
                <span className="inline-flex min-h-11 items-center gap-2">
                  {action}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}
