import { useState, useEffect, createContext, useContext } from "react";
type Theme = "light" | "dark";
type ThemeSwitchContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
};
type ThemeSwitchProviderProps = {
  children: React.ReactNode;
};
const ThemeSwitchContext = createContext<ThemeSwitchContextType | null>(null);
export default function ThemeSwitchProvider({
  children,
}: ThemeSwitchProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ThemeSwitchContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
}

export const useThemeSwitch = () => {
  const context = useContext(ThemeSwitchContext);
  if (!context) {
    throw new Error("useThemeSwitch must be used within a ThemeSwitchProvider");
  }

  return context;
};
