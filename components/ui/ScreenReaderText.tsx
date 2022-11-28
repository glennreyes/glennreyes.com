import type { ComponentProps } from 'react';

type ScreenReaderTextProps = Omit<ComponentProps<'span'>, 'className'>;

export function ScreenReaderText(props: ScreenReaderTextProps) {
  return <span className="sr-only" {...props} />;
}
