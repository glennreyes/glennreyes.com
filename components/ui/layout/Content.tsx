import type { ComponentPropsWithoutRef } from 'react';
import { Container } from './Container';

type ContentProps = Omit<ComponentPropsWithoutRef<'section'>, 'className'>;

export function Content(props: ContentProps) {
  return <Container as="section" className="grid gap-16 lg:grid-cols-12" {...props} />;
}

type ContentPrimaryProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

function ContentPrimary(props: ContentPrimaryProps) {
  return <div className="lg:col-span-7" {...props} />;
}

Content.Primary = ContentPrimary;

type ContentSecondaryProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function ContentSecondary(props: ContentSecondaryProps) {
  return <div className="grid content-start gap-8 lg:col-span-5" {...props} />;
}

Content.Secondary = ContentSecondary;
