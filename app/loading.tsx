import { Page } from '@/components/ui/layout/page';

export default function Loading() {
  return (
    <Page>
      <div className="grid max-w-4xl gap-4">
        <div className="h-10 w-2/3 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
        <div className="h-5 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      </div>
    </Page>
  );
}
