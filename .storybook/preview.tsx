import type { Preview } from '@storybook/nextjs';

import '@fontsource/geist/latin-400.css';
import '@fontsource/geist/latin-500.css';
import '@fontsource/geist-mono/latin-400.css';
import { createColorScheme } from '@ui-sdk/core';
import { Preferences } from '@ui-sdk/react/preferences';
import { useMemo } from 'react';
import '../app/globals.css';

const preview: Preview = {
  initialGlobals: { theme: 'light' },
  globalTypes: {
    theme: {
      description: 'Site theme',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    function ThemePreview(Story, context) {
      const theme = context.globals.theme === 'dark' ? 'dark' : 'light';
      const scheme = useMemo(
        () => createColorScheme({ defaultValue: theme, global: true }),
        [theme],
      );
      return (
        <Preferences preferences={[scheme]}>
          <div className="bg-background text-foreground p-6">
            <Story />
          </div>
        </Preferences>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
};

export default preview;
