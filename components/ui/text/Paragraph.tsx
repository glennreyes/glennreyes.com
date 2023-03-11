import type { ComponentPropsWithoutRef } from 'react';

type ParagraphProps = Omit<ComponentPropsWithoutRef<'p'>, 'className'>;

export function Paragraph(props: ParagraphProps) {
  return <p {...props} />;
}
