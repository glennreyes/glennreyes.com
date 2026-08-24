'use client';

import type { ReactNode } from 'react';

import { catchError } from 'next/error';
import type { ErrorInfo } from 'next/error';

import { Button } from '@/components/ui/forms/button';
import { Page } from '@/components/ui/layout/page';

function getErrorDigest(error: unknown): string | undefined {
  if (typeof error !== 'object' || error === null || !('digest' in error)) {
    return undefined;
  }

  const digest = error.digest;

  return typeof digest === 'string' ? digest : undefined;
}

interface ErrorFallbackProps {
  children?: ReactNode;
}

function ErrorFallback(
  _props: ErrorFallbackProps,
  { error, retry }: ErrorInfo,
) {
  const digest = getErrorDigest(error);

  return (
    <Page>
      <Page.Header lead="Something went wrong while loading this page. You can try again, or head back home.">
        Unable to load this page
      </Page.Header>
      {digest ? (
        <p className="text-slate-500 dark:text-slate-400">
          Reference: {digest}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => retry()}>Try again</Button>
        <Button appearance="secondary" as="link" href="/">
          Back home
        </Button>
      </div>
    </Page>
  );
}

export const ErrorBoundary = catchError(ErrorFallback);
