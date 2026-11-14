'use client';

import { Menu as MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { stravaProfile } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ChapterLink {
  href: string;
  label: string;
}

type Chapter = 'tech' | 'freediving' | 'sport' | 'running' | 'hyrox';

const chapterLinks: Record<Chapter, ChapterLink> = {
  tech: { href: '/', label: 'Tech' },
  freediving: { href: '/freediving', label: 'Freediving' },
  sport: { href: '/sport', label: 'Sport' },
  running: { href: '/sport/running', label: 'Running' },
  hyrox: { href: '/sport/hyrox', label: 'HYROX' },
};

const chapterNavigation: Record<Chapter, ChapterLink[]> = {
  tech: [
    { href: '/posts', label: 'Posts' },
    { href: '/talks', label: 'Talks' },
    { href: '/workshops', label: 'Workshops' },
    { href: '/appearances', label: 'Appearances' },
    { href: '/about', label: 'About' },
  ],
  freediving: [
    chapterLinks.freediving,
    { href: '#gallery', label: 'Gallery' },
    { href: '#unitydive', label: 'Unitydive' },
  ],
  sport: [chapterLinks.sport, chapterLinks.running, chapterLinks.hyrox],
  running: [
    chapterLinks.running,
    { href: '#races', label: 'Races' },
    { href: stravaProfile, label: 'Strava' },
  ],
  hyrox: [chapterLinks.hyrox, { href: '#sessions', label: 'Sessions' }],
};

const chapters: Chapter[] = ['tech', 'freediving', 'running', 'hyrox'];

function getChapter(pathname: string): Chapter {
  if (pathname === '/freediving') {
    return 'freediving';
  }
  if (pathname === '/sport/running') {
    return 'running';
  }
  if (pathname === '/sport/hyrox') {
    return 'hyrox';
  }
  if (pathname === '/sport') {
    return 'sport';
  }
  return 'tech';
}

interface ChapterLinksProps {
  links: ChapterLink[];
  pathname: string;
  mobile?: boolean;
  secondary?: boolean;
  onNavigate?: () => void;
}

function ChapterLinks({
  links,
  pathname,
  mobile = false,
  secondary = false,
  onNavigate,
}: ChapterLinksProps) {
  return (
    <ul
      aria-label={secondary ? 'Other chapters' : 'Chapter links'}
      className={cn(
        mobile ? 'grid gap-1' : 'flex items-center gap-1',
        secondary && (mobile ? 'border-t pt-4' : 'border-l pl-3'),
      )}
    >
      {links.map(({ href, label }) => {
        const current = href === pathname;
        const ancestor =
          href.startsWith('/') && pathname.startsWith(href + '/');
        return (
          <li key={href}>
            <Link
              aria-current={
                current ? 'page' : ancestor ? 'location' : undefined
              }
              className={cn(
                'inline-flex min-h-11 items-center whitespace-nowrap transition-colors',
                mobile ? 'hover:bg-muted flex px-3' : 'rounded-none px-2',
                current || ancestor
                  ? 'font-medium underline underline-offset-8'
                  : secondary
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'hover:text-muted-foreground',
              )}
              href={href}
              onClick={onNavigate}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function Menu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const chapter = getChapter(pathname);
  const primary = chapterNavigation[chapter];
  const secondary = chapters
    .filter(
      (item) =>
        item !== chapter &&
        (chapter !== 'sport' || (item !== 'running' && item !== 'hyrox')),
    )
    .map((item) => chapterLinks[item]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-3 lg:flex"
      >
        <ChapterLinks links={primary} pathname={pathname} />
        <ChapterLinks links={secondary} pathname={pathname} secondary />
      </nav>
      <Sheet onOpenChange={setOpen} open={open}>
        <SheetTrigger asChild>
          <Button
            aria-expanded={open}
            aria-label="Open Menu"
            className="lg:hidden"
            size="icon"
            variant="ghost"
          >
            <MenuIcon aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto p-6 pt-8" side="right">
          <SheetTitle className="pr-12">
            {chapterLinks[chapter].label}
          </SheetTitle>
          <SheetDescription className="sr-only">
            Navigate within this chapter or switch to another.
          </SheetDescription>
          <nav aria-label="Main navigation" className="grid gap-4 pb-4">
            <ChapterLinks
              links={primary}
              pathname={pathname}
              onNavigate={closeMenu}
              mobile
            />
            <ChapterLinks
              links={secondary}
              pathname={pathname}
              onNavigate={closeMenu}
              mobile
              secondary
            />
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
