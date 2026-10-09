import { SectionLink } from '@/components/site/section-link';
import { getAllPublishedPosts } from '@/lib/posts';

export async function Posts() {
  const allPosts = await getAllPublishedPosts();
  const posts = allPosts.slice(0, 2);
  return (
    <ul className="grid gap-2">
      {posts.map(({ frontmatter, slug }) => (
        <li key={slug}>
          <SectionLink href={'/posts/' + slug}>{frontmatter.title}</SectionLink>
        </li>
      ))}
    </ul>
  );
}
