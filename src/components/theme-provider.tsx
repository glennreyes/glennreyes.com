import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import DarkModeContext, { DarkModeProvider } from './dark-mode-context';
import { dark, light, system } from '../theme';

type CustomThemeProviderProps = {
  children?: React.ReactChild;
};

const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <StyledThemeProvider theme={{ ...system, ...(darkMode ? dark : light) }}>
      {children}
    </StyledThemeProvider>
  );
};

type ThemeProviderProps = {
  children?: React.ReactChild;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <DarkModeProvider>
    <CustomThemeProvider>{children}</CustomThemeProvider>
  </DarkModeProvider>
);

export default ThemeProvider;
