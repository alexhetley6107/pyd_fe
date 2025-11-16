import { ThemeSwitch } from "@/features";
import s from "./AuthLayout.module.css";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.switcher}>
        <ThemeSwitch />
      </div>

      <div className={s.container}>
        <Outlet />
      </div>
    </div>
  );
};
