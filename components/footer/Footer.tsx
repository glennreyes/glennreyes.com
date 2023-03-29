import { Link } from '../ui/elements/Link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grid items-center justify-center border-t border-slate-100 p-4">
      <p className="text-center text-xs text-slate-400">
        © {currentYear} Glenn Reyes · <Link href="/legal-notice">Legal Notice</Link>
      </p>
    </footer>
  );
}
