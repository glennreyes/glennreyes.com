import Link from 'next/link';
import { Footer as BaseFooter } from '~/components/ui/layout/Footer';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <BaseFooter>
      © {currentYear} Glenn Reyes · <Link href="/legal-notice">Legal Notice</Link>
    </BaseFooter>
  );
}
