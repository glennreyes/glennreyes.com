import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import DarkModeContext, { DarkModeProvider } from './dark-mode-context';
import { dark, light, system } from '../theme';

type ThemeProviderProps = {
  children?: React.ReactChild;
};

const CustomThemeProvider = ({ children }) => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <StyledThemeProvider theme={{ ...system, ...(darkMode ? dark : light) }}>
      {children}
    </StyledThemeProvider>
  );
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <DarkModeProvider>
      <CustomThemeProvider children={children} />
    </DarkModeProvider>
  );
};

export default ThemeProvider;
