import Image from 'next/image';
import { Play } from 'lucide-react';

import { SectionLink } from '@/components/site/section-link';
import { Link } from '@/components/ui/link/link';
import { getInstagramPosts } from '@/lib/instagram';

export async function InstagramFeed() {
  const posts = await getInstagramPosts();
  if (posts.length === 0) {
    return null;
  }
  return (
    <section
      className="grid gap-8 border-t pt-8"
      aria-labelledby="instagram-heading"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 id="instagram-heading">A few recent sidequests.</h2>
        <SectionLink href="https://www.instagram.com/glnnreyes/">
          @glnnreyes
        </SectionLink>
      </div>
      <ul className="grid gap-6 sm:grid-cols-3">
        {posts.map((post) => (
          <li key={post.id}>
            <Link className="grid gap-4" href={post.href}>
              <div className="aspect-portrait relative overflow-hidden rounded-4xl">
                <Image
                  alt={post.caption}
                  className="object-cover"
                  fill
                  sizes="(max-width: 639px) 100vw, 33vw"
                  src={post.image}
                  unoptimized
                />
                {post.video ? (
                  <span className="absolute right-5 bottom-5 grid size-11 place-items-center rounded-full bg-black text-white">
                    <Play aria-hidden="true" className="size-4" />
                  </span>
                ) : null}
              </div>
              <p className="line-clamp-3 px-2">{post.caption}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
