import dayjs from 'dayjs';
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

type ThemeProps = {
  children: (props: { darkMode: boolean }) => React.ReactNode;
};

const Theme: React.FC<ThemeProps> = ({ children }) => {
  const currentHour = dayjs().hour();
  const isNight = currentHour >= 18 || currentHour <= 6;
  const [darkMode, setDarkMode] = useState(isNight);

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
