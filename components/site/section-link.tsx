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
      className="hover:bg-foreground hover:text-background inline-flex min-h-11 items-center gap-5 rounded-full border px-5 py-2 transition-colors"
      href={href}
    >
      {children}
      <ArrowUpRight aria-hidden="true" className="size-4" />
    </Link>
  );
}
