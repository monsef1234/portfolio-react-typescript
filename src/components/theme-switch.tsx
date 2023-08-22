import { BsMoon, BsSun } from "react-icons/bs";
import { useThemeSwitch } from "../context/theme-switch-context";
export default function ThemeSwitch() {
  const { toggleTheme, theme } = useThemeSwitch();
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-3 transition dark:bg-gray-800 hover:scale-105 active:scale-105 focus:scale-105 right-3 text-lg outline-none border-white border-opacity-40 shadow-2xl bg-white w-12 h-12 bg-opacity-80 rounded-full backdrop-blur-[0.5rem] flex items-center justify-center"
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
