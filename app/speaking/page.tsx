import type { Metadata } from 'next';
import { Page } from '@/components/ui/layout/page';
import { Link } from '@/components/ui/link/link';

export const metadata: Metadata = { title: 'Speaking' };

const collections = [
  {
    href: '/talks',
    title: 'Talks & recordings',
    description: 'Ideas shared on stage, ready to watch.',
  },
  {
    href: '/workshops',
    title: 'Workshops',
    description: 'Hands-on sessions for people building for the web.',
  },
  {
    href: '/appearances',
    title: 'Appearances',
    description: 'Conferences, meetups, and conversations.',
  },
];

export default function SpeakingPage() {
  return (
    <Page>
      <Page.Header lead="Sharing what I learn, on stage and in the room.">
        Speaking & teaching.
      </Page.Header>
      <ul className="-m-4 grid gap-2 md:grid-cols-3">
        {collections.map((collection) => (
          <li key={collection.href}>
            <Link
              className="hover:bg-accent focus-visible:bg-accent grid h-full content-start gap-3 rounded-xl p-4 transition-colors"
              href={collection.href}
            >
              <h2>{collection.title}</h2>
              <p className="text-muted-foreground">{collection.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}
