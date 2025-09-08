import type { ComponentPropsWithoutRef } from 'react';

import '@fontsource/geist/latin-400.css';
import '@fontsource/geist/latin-500.css';
import '@fontsource/geist-mono/latin-400.css';

type HtmlProps = Omit<ComponentPropsWithoutRef<'html'>, 'className' | 'lang'>;

export const Html = (props: HtmlProps) => {
  return <html lang="en" {...props} />;
};
