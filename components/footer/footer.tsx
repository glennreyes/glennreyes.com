import { ArrowUpRight } from 'lucide-react';

import { ThemeToggle } from '@/components/navigation/theme-toggle';
import { Container } from '@/components/ui/layout/container';
import { Link } from '@/components/ui/link/link';
import { email } from '@/lib/constants';

function getCopyrightYear() {
  return process.env.NEXT_PUBLIC_BUILD_YEAR ?? '2026';
}

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="grid gap-8 py-10 md:gap-10 md:py-12">
        <section
          aria-labelledby="contact"
          className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"
        >
          <div className="grid max-w-xl gap-3">
            <h2 className="font-medium" id="contact">
              Let’s build something together.
            </h2>
            <p className="text-muted-foreground">
              Have a project, an idea worth exploring, or a stage to share?
              I’d love to hear about it.
            </p>
          </div>
          <Link
            className="hover:bg-accent focus-visible:bg-accent inline-flex min-h-11 w-fit items-center gap-2 rounded-xl border px-5 py-3 transition-colors"
            href={'mailto:' + email}
          >
            {email}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </section>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t pt-6">
          <p className="text-muted-foreground">
            © {getCopyrightYear()} Glenn Reyes
          </p>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <Link className="inline-flex min-h-11 items-center" href="/posts">
              Writing
            </Link>
            <Link className="inline-flex min-h-11 items-center" href="/uses">
              Uses
            </Link>
            <Link className="inline-flex min-h-11 items-center" href="/privacy">
              Privacy
            </Link>
            <Link className="inline-flex min-h-11 items-center" href="/legal">
              Legal
            </Link>
            <ThemeToggle />
          </nav>
        </div>
        <div className="text-muted-foreground flex flex-wrap items-center gap-x-3 border-t pt-3">
          <span>Away from the screen</span>
          <Link
            className="hover:text-foreground inline-flex min-h-11 items-center transition-colors"
            href="/freediving"
          >
            Freediving
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            className="hover:text-foreground inline-flex min-h-11 items-center transition-colors"
            href="/sport"
          >
            Running &amp; HYROX
          </Link>
        </div>
      </Container>
    </footer>
  );
}
