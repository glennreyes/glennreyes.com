import type { Route } from 'next';

export function isAppRoute(href: string): href is Route {
  return href.length > 0;
}
