import type { ReactNode } from 'react';
import { NewsletterForm } from './newsletter-form';

interface NewsletterProps {
  children?: ReactNode;
  title?: string;
}
export function Newsletter({
  children = 'Occasional notes. Software and life.',
  title = 'Stay in the loop',
}: NewsletterProps) {
  return (
    <section className="grid max-w-xl content-start gap-6">
      <div className="grid gap-2">
        <h2>{title}</h2>
        <p className="text-muted-foreground">{children}</p>
      </div>
      <NewsletterForm />
    </section>
  );
}
