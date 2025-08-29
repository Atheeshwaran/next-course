'use client'
import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from "react";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};
type Theme = (typeof THEME)[keyof typeof THEME];

interface ThemeContextType {
  currentTheme: Theme;
  changeTheme: (theme: Theme) => void;
}

const defaultTheme: ThemeContextType = {
  currentTheme: THEME.LIGHT,
  changeTheme: () => {},
};

export const ApplicationConfigsContext =
  createContext<ThemeContextType>(defaultTheme);

export const useApplicationTheme = () => useContext(ApplicationConfigsContext);

 const ApplicationThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEME.LIGHT);

  const changeTheme = useCallback((theme: Theme) => {
    setCurrentTheme(theme);
  }, []);

  return (
    <ApplicationConfigsContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ApplicationConfigsContext.Provider>
  );
 };

 export default ApplicationThemeProvider;
