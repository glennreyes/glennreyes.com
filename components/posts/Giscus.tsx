'use client';

import GiscusBase from '@giscus/react';

export function Giscus() {
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
      theme="light"
    />
  );
}
