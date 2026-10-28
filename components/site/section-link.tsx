import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/components/ui/link/link';

interface SectionLinkProps {
  href: string;
  children: ReactNode;
}
export function SectionLink({ href, children }: SectionLinkProps) {
  return (
    <Link
      className="group inline-flex min-h-11 items-center gap-3 py-2 underline-offset-4 hover:underline"
      href={href}
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform motion-safe:group-hover:translate-x-1"
      />
    </Link>
  );
}
