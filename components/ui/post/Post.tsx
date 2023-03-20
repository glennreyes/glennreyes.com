import type { IsoDateTimeString, Post as PostType } from 'contentlayer/generated';
import { format, formatISODuration } from 'date-fns';
import Link from 'next/link';
import type { ReadTimeResults } from 'reading-time';

interface PostProps {
  post: Pick<PostType, 'excerpt' | 'slug' | 'title'> & {
    publishedAt: IsoDateTimeString;
    readingTime: ReadTimeResults;
  };
}

export function Post({ post }: PostProps) {
  const publishedDate = new Date(post.publishedAt);
  const isThisYearPublished = publishedDate.getFullYear() === new Date().getFullYear();
  const publishedAt = format(publishedDate, isThisYearPublished ? 'MMMM dd' : 'MMMM dd, yyyy');
  const publishedAtValue = format(publishedDate, 'yyyy-MM-dd');
  const readingTimeValue = formatISODuration({ minutes: post.readingTime.minutes });

  return (
    <article className="group relative grid gap-3 py-6">
      <div className="relative z-10 text-gray-400">
        <time dateTime={publishedAtValue}>{publishedAt}</time> ·{' '}
        <time dateTime={readingTimeValue}>{post.readingTime.text}</time>
      </div>
      <h3 className="text-lg font-semibold tracking-tight">
        <Link href={`/posts/${post.slug}`}>
          <span className="absolute -inset-x-4 inset-y-0 z-20 md:-inset-x-6" />
          <span className="relative z-10">{post.title}</span>
        </Link>
      </h3>
      <p className="relative z-10 text-stone-500">{post.excerpt}</p>
      <div className="absolute -inset-x-4 inset-y-0 scale-95 bg-stone-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-2xl md:-inset-x-6" />
    </article>
  );
}
