import type { IsoDateTimeString, Post as PostType } from 'contentlayer/generated';
import { format, formatISODuration } from 'date-fns';
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
  const publishedAt = format(publishedDate, isThisYearPublished ? 'MMM dd' : 'MMM dd, yyyy');
  const publishedAtValue = format(publishedDate, 'yyyy-MM-dd');
  const readingTimeValue = formatISODuration({ minutes: post.readingTime.minutes });

  return (
    <article className="grid gap-4 py-4">
      <div>
        <h3 className="font-semibold">{post.title}</h3>
        <div>
          <time dateTime={publishedAtValue}>{publishedAt}</time> ·{' '}
          <time dateTime={readingTimeValue}>{post.readingTime.text}</time>
        </div>
      </div>
      <p>{post.excerpt}</p>
    </article>
  );
}
