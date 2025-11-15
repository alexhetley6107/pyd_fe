import s from "./AuthLayout.module.css";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Outlet />
      </div>
    </div>
  );
};
