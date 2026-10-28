'use client';

import { Button } from '@/components/ui/forms/button';
import { Page } from '@/components/ui/layout/page';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <Page>
      <Page.Header lead="Something went wrong while loading this page. You can try again, or head back home.">
        Unable to load this page
      </Page.Header>
      {error.digest ? (
        <p className="text-slate-500 dark:text-slate-400">
          Reference: {error.digest}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => reset()}>Try again</Button>
        <Button appearance="secondary" as="link" href="/">
          Back home
        </Button>
      </div>
    </Page>
  );
}
