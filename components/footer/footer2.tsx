import { Link } from '../ui/link/link2';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const linkClasses =
    'text-slate-500 hover:text-slate-600 focus-visible:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 dark:focus-visible:text-slate-300';

  return (
    <footer className="grid items-center justify-center border-t border-slate-300/25 p-4 dark:border-slate-500/25">
      <p className="text-center text-xs text-slate-500 dark:text-slate-400">
        © {currentYear} Glenn Reyes ·{' '}
        <Link className={linkClasses} href="/privacy">
          Privacy
        </Link>{' '}
        ·{' '}
        <Link className={linkClasses} href="/legal">
          Legal
        </Link>
      </p>
    </footer>
  );
}
