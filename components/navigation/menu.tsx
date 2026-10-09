'use client';
import { Menu as MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from '@/components/ui/link/link';
import { cn } from '@/lib/utils';
const links = [
  { href: '/freediving', label: 'Freediving' },
  { href: '/sport', label: 'Sport' },
  { href: '/tech', label: 'Tech' },
  { href: '/about', label: 'About' },
];
export function Menu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  function isCurrent(href: string) {
    return (
      pathname === href ||
      pathname.startsWith(href + '/') ||
      (href === '/tech' &&
        ['/talks', '/workshops', '/appearances', '/posts'].some((path) =>
          pathname.startsWith(path),
        ))
    );
  }
  return (
    <nav aria-label="Main navigation">
      <ul className="hidden gap-2 md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              aria-current={isCurrent(link.href) ? 'page' : undefined}
              className={cn(
                'inline-flex min-h-11 items-center rounded-none px-3 transition-colors',
                isCurrent(link.href)
                  ? 'font-medium underline underline-offset-8'
                  : 'text-muted-foreground hover:text-foreground',
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Sheet onOpenChange={setOpen} open={open}>
        <SheetTrigger asChild>
          <Button
            aria-expanded={open}
            aria-label="Open Menu"
            className="md:hidden"
            size="icon"
            variant="ghost"
          >
            <MenuIcon aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <SheetContent className="gap-8 p-8" side="right">
          <SheetTitle>Explore</SheetTitle>
          <SheetDescription>Freediving, sport, and Tech.</SheetDescription>
          <ul className="grid gap-4">
            {[{ href: '/', label: 'Home' }, ...links].map((link) => (
              <li key={link.href}>
                <Link
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className="hover:bg-muted flex min-h-11 items-center rounded-md px-4"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
