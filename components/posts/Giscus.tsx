'use client';

import GiscusBase from '@giscus/react';
import { useTheme } from 'next-themes';
import { parseResolvedTheme } from '~/lib/theme';

export function Giscus() {
  const { resolvedTheme } = useTheme();
  const theme = parseResolvedTheme(resolvedTheme);

  return (
    <GiscusBase
      category="Announcements"
      categoryId="DIC_kwDOAvPCOs4CVX9I"
      inputPosition="bottom"
      lang="en"
      loading="lazy"
      mapping="pathname"
      reactionsEnabled="0"
      repo="glennreyes/glennreyes.com"
      repoId="MDEwOlJlcG9zaXRvcnk0OTUyOTQwMg=="
      theme={theme}
    />
  );
}
