import type { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export function useIsActivePathname(href: LinkProps['href']) {
  const pathname = usePathname();

  return pathname === (typeof href === 'string' ? href : href.pathname);
}
