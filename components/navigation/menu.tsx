'use client';

import { ArrowLeft, Menu as MenuIcon } from 'lucide-react';
import { m, useReducedMotion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { Link } from '@/components/ui/link/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { personalChaptersPublished } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ChapterLink {
  href: string;
  label: string;
}

type Chapter = 'tech' | 'freediving' | 'sport';

const chapterLinks: Record<Chapter, ChapterLink> = {
  tech: { href: '/', label: 'Tech' },
  freediving: { href: '/freediving', label: 'Freediving' },
  sport: { href: '/sport', label: 'Running & fitness' },
};

const chapterNavigation: Record<Chapter, ChapterLink[]> = {
  tech: [
    { href: '/posts', label: 'Posts' },
    { href: '/projects', label: 'Projects' },
    { href: '/speaking', label: 'Speaking' },
    { href: '/about', label: 'About' },
  ],
  freediving: [
    chapterLinks.freediving,
    ...(personalChaptersPublished
      ? [
          { href: '#gallery', label: 'Gallery' },
          { href: '#unitydive', label: 'Unitydive' },
        ]
      : []),
  ],
  sport: [chapterLinks.sport],
};

const chapters: Chapter[] = ['tech', 'freediving', 'sport'];

function getChapter(pathname: string): Chapter {
  if (pathname === '/freediving') {
    return 'freediving';
  }
  if (pathname === '/sport' || pathname.startsWith('/sport/')) {
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
  const reducedMotion = useReducedMotion();
  const primaryBar = !mobile && !secondary;

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
          (href.startsWith('/') && pathname.startsWith(href + '/')) ||
          (href === '/speaking' &&
            ['/talks', '/workshops', '/appearances'].some(
              (path) => pathname === path || pathname.startsWith(path + '/'),
            ));
        return (
          <li key={href}>
            <Link
              aria-current={
                current ? 'page' : ancestor ? 'location' : undefined
              }
              className={cn(
                'relative isolate inline-flex min-h-11 items-center px-3 whitespace-nowrap transition-colors',
                mobile ? 'hover:bg-muted flex' : 'rounded-full',
                secondary && !mobile && 'hover:bg-foreground/5',
                !primaryBar && 'aria-[current]:bg-foreground/5',
                current || ancestor
                  ? 'font-medium'
                  : secondary
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'hover:text-muted-foreground',
              )}
              href={href}
              onClick={onNavigate}
            >
              {primaryBar && (current || ancestor) ? (
                <m.span
                  aria-hidden="true"
                  className="bg-foreground/5 pointer-events-none absolute inset-0 -z-10 rounded-full"
                  initial={false}
                  layoutId="primary-nav-indicator"
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 440, damping: 38 }
                  }
                />
              ) : null}
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
    .filter((item) => item !== chapter)
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
      <div className="flex items-center gap-2 lg:hidden">
        {chapter !== 'tech' ? (
          <Link
            className="hover:bg-accent inline-flex min-h-11 items-center gap-2 rounded-full px-3"
            href="/"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Tech
          </Link>
        ) : null}
        <Sheet onOpenChange={setOpen} open={open} side="right">
          <SheetTrigger
            aria-expanded={open}
            aria-label="Open Menu"
            className={buttonVariants({
              size: 'icon',
              variant: 'ghost',
              className: 'rounded-full',
            })}
          >
            <MenuIcon aria-hidden="true" />
          </SheetTrigger>
          <SheetContent className="overflow-y-auto p-6 pt-8">
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
      </div>
    </>
  );
}
