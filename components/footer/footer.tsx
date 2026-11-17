import { ThemeToggle } from '@/components/navigation/theme-toggle';
import { Container } from '@/components/ui/layout/container';
import { Link } from '@/components/ui/link/link';
import { email } from '@/lib/constants';

function getCopyrightYear() {
  return process.env.NEXT_PUBLIC_BUILD_YEAR ?? '2026';
}

export function Footer() {
  return (
    <footer className="border-t py-8">
      <Container className="grid gap-8">
        <section
          aria-labelledby="contact-heading"
          className="grid gap-3 py-4"
        >
          <h2 className="font-medium" id="contact-heading">
            Let’s build something together.
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Open to projects, collaborations, and partners to build with.
          </p>
          <Link
            className="inline-flex min-h-11 w-fit items-center underline-offset-4 hover:underline"
            href={'mailto:' + email}
          >
            {email}
          </Link>
        </section>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t pt-6">
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
        <nav
          aria-label="Beyond the screen"
          className="text-muted-foreground flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-4"
        >
          <p>Beyond the screen</p>
          <div className="flex flex-wrap items-center gap-x-4">
            <Link
              className="hover:text-foreground focus-visible:text-foreground inline-flex min-h-11 items-center transition-colors"
              href="/freediving"
            >
              Freediving
            </Link>
            <Link
              className="hover:text-foreground focus-visible:text-foreground inline-flex min-h-11 items-center transition-colors"
              href="/sport"
            >
              Running & HYROX
            </Link>
          </div>
        </nav>
      </Container>
    </footer>
  );
}
