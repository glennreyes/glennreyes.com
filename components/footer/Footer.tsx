import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      © {currentYear} Glenn Reyes. All rights reserved.
      <Link href="/legal-notice">Legal Notice</Link>
    </footer>
  );
}
