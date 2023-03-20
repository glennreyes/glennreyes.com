import type { ComponentPropsWithoutRef } from 'react';

type ScreenReaderTextProps = Omit<ComponentPropsWithoutRef<'span'>, 'className'>;

export function ScreenReaderText(props: ScreenReaderTextProps) {
  return <span className="sr-only" {...props} />;
}
