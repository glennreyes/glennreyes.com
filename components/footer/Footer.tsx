import { Link } from '../ui/link/Link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grid items-center justify-center border-t border-slate-300/25 p-4 dark:border-slate-500/25">
      <p className="text-center text-xs text-slate-400 dark:text-slate-600">
        © {currentYear} Glenn Reyes ·{' '}
        <Link
          className="text-slate-400 hover:text-slate-500 focus-visible:text-slate-500 dark:text-slate-600 dark:hover:text-slate-500 dark:focus-visible:text-slate-500"
          href="/legal-notice"
        >
          Legal Notice
        </Link>
      </p>
    </footer>
  );
}
