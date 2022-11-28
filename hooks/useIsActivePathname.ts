import { usePathname } from 'next/navigation';
import type { LinkProps } from 'next/link';

export function useIsActivePathname(href: LinkProps['href']) {
  const pathname = usePathname();

  return pathname === (typeof href === 'string' ? href : href.pathname);
}
