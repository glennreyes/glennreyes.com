import type { ReactNode } from 'react';
import { Link } from '@/components/ui/link/link';

interface SectionLinkProps {
  href: string;
  children: ReactNode;
}
export function SectionLink({ href, children }: SectionLinkProps) {
  return (
    <Link
      className="hover:bg-accent focus-visible:bg-accent -mx-3 inline-flex min-h-11 w-fit items-center rounded-lg px-3 py-2 transition-colors"
      href={href}
    >
      {children}
    </Link>
  );
}
