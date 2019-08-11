import React from 'react';
import { useLocalStorage } from 'react-use';

const DarkModeContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

type DarkModeProviderProps = {
  children: React.ReactNode;
};

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toggleDarkMode: () => setDarkMode(darkMode => !darkMode),
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
