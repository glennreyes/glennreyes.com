import type { IsoDateTimeString, Post as PostType } from 'contentlayer/generated';
import Link from 'next/link';
import type { ReadTimeResults } from 'reading-time';
import { DateDisplay } from '~/components/ui/elements/DateDisplay';

interface PostProps {
  post: Pick<PostType, 'excerpt' | 'slug' | 'title'> & {
    publishedAt: IsoDateTimeString;
    readingTime: ReadTimeResults;
  };
}

export function Post({ post }: PostProps) {
  return (
    <article className="group relative grid gap-3">
      <DateDisplay className="relative z-10 text-stone-400" value={post.publishedAt} />
      <h3 className="text-lg font-semibold tracking-tight">
        <Link href={`/posts/${post.slug}`}>
          <span className="absolute -inset-4 z-20 md:-inset-6" />
          <span className="relative z-10">{post.title}</span>
        </Link>
      </h3>
      <p className="relative z-10 text-stone-500">{post.excerpt}</p>
      <div className="absolute -inset-4 scale-95 bg-stone-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-2xl md:-inset-6" />
    </article>
  );
}
