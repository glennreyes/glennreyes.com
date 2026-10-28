import type { Preview } from '@storybook/nextjs';

import '@fontsource/geist/latin-400.css';
import '@fontsource/geist/latin-500.css';
import '@fontsource/geist-mono/latin-400.css';
import { ThemeProvider } from 'next-themes';
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
      return (
        <ThemeProvider attribute="data-theme" forcedTheme={theme}>
          <div className="bg-background text-foreground p-6">
            <Story />
          </div>
        </ThemeProvider>
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
