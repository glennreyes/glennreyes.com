import { ThemeToggle } from '../navigation/theme-toggle';
import { Container } from '../ui/layout/container';
import { Link } from '../ui/link/link';

function getCopyrightYear() {
  const year = process.env.NEXT_PUBLIC_BUILD_YEAR;

  if (typeof year === 'string' && year.length > 0) {
    return year;
  }

  return '2026';
}

export function Footer() {
  const linkClasses =
    'text-slate-500 hover:text-slate-600 focus-visible:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 dark:focus-visible:text-slate-300';
  const copyrightYear = getCopyrightYear();

  return (
    <footer className="border-t border-slate-300/25 p-4 dark:border-slate-500/25">
      <Container className="flex items-center justify-between gap-4">
        <p className="text-slate-500 dark:text-slate-400">
          © {copyrightYear} Glenn Reyes ·{' '}
          <Link className={linkClasses} href="/privacy">
            Privacy
          </Link>{' '}
          ·{' '}
          <Link className={linkClasses} href="/legal">
            Legal
          </Link>
        </p>
        <ThemeToggle />
      </Container>
    </footer>
  );
}
