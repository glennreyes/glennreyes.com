import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

const Theme: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode: () => setDarkMode(darkMode => !darkMode),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
