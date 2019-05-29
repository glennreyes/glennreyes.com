import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import DarkModeContext, { DarkModeProvider } from './dark-mode-context';
import theme from '../theme';

type ThemeProviderProps = {
  children?: React.ReactChild;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <DarkModeProvider>
      <StyledThemeProvider theme={{ ...theme, darkMode }}>
        {children}
      </StyledThemeProvider>
    </DarkModeProvider>
  );
};

export default ThemeProvider;
