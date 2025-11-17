import { isDarkTheme, toggleTheme } from "../lib";
import { Switch } from "@/shared/ui";

export const ThemeSwitch = () => {
  return <Switch checked={isDarkTheme()} onToggle={toggleTheme} />;
};
