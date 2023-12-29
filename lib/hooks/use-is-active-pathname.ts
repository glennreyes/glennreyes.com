import { usePathname } from 'next/navigation';

export function useIsActivePathname(path: string) {
  const pathname = usePathname();

  if (path === '/') {
    return pathname === path;
  }

  return pathname.startsWith(path);
}
