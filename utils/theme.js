import { createContext, useEffect, useState } from "react";
import THEMES from "@/components/constants/themes";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, SetTheme] = useState(THEMES.light);
  useEffect(() => {
    document.getElementsByTagName('html')[0].dataset.theme = theme;
  }, [])
  return (
    <ThemeContext.Provider value={
      {
        theme,
        SetTheme: (currentTheme) => {
          SetTheme(currentTheme);
          document.getElementsByTagName('html')[0].dataset.theme = currentTheme;
        }
      }
    }>
      {children}
    </ThemeContext.Provider>
  )
} 