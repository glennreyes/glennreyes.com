import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-100">
      <div className="container mx-auto p-4 text-center text-xs text-stone-400">
        © {currentYear} Glenn Reyes · <Link href="/legal-notice">Legal Notice</Link>
      </div>
    </footer>
  );
}
