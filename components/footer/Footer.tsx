import { Link } from '../ui/elements/Link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grid items-center justify-center border-t border-stone-100 p-4">
      <p className="text-center text-xs text-stone-400">
        © {currentYear} Glenn Reyes · <Link href="/legal-notice">Legal Notice</Link>
      </p>
    </footer>
  );
}
