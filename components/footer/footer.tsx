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
      <Container className="grid gap-8 md:grid-cols-2">
        <div className="grid gap-2">
          <p>Glenn Reyes</p>
          <p className="text-muted-foreground">
            In the water. On the move. Making things.
          </p>
          <Link
            className="inline-flex min-h-11 w-fit items-center"
            href={'mailto:' + email}
          >
            {email}
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2 md:justify-end">
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
        </div>
        <p className="text-muted-foreground">
          © {getCopyrightYear()} Glenn Reyes
        </p>
      </Container>
    </footer>
  );
}
