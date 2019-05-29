import React from 'react';

const DarkModeContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

type DarkModeProviderProps = {
  children: React.ReactNode;
};

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const currentHours = new Date().getHours();

  // Between 6pm and 5:59am
  const isNight = currentHours >= 18 || currentHours < 6;

  const [darkMode, setDarkMode] = React.useState(isNight);

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
