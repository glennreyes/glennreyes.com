import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

interface ThemeProps {
  children: (props: { darkMode: boolean }) => React.ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode: () => setDarkMode(darkMode => !darkMode),
      }}
    >
      {children({ darkMode })}
    </ThemeContext.Provider>
  );
};

export default Theme;
