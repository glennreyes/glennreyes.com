import { Link } from '@/components/ui/link/link';
import { projects } from '@/lib/site-content';

interface ProjectCardsProps {
  headingLevel?: 'h2' | 'h3';
}

export function ProjectCards({
  headingLevel: Heading = 'h3',
}: ProjectCardsProps) {
  return (
    <ul className="-m-4 grid gap-2 md:grid-cols-3">
      {projects.map((project) => (
        <li key={project.slug}>
          <Link
            className="hover:bg-accent focus-visible:bg-accent grid h-full content-start gap-3 rounded-xl p-4 transition-colors"
            href={project.href}
          >
            <Heading>{project.title}</Heading>
            <p className="text-muted-foreground">{project.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
