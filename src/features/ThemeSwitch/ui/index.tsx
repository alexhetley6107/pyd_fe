import s from "./ThemeSwitcher.module.css";
import { toggleTheme } from "../lib";

export const ThemeSwitch = () => {
  return (
    <div className={s.switcher} onClick={toggleTheme}>
      SWITCH
    </div>
  );
};
