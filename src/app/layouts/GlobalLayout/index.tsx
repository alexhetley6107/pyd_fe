import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import s from "./GlobalLayout.module.css";
import { Spinner } from "@/shared/ui";
import { toggleTheme } from "@/features";

export const GlobalLayout = () => {
  useEffect(() => {
    toggleTheme();
  }, []);

  return (
    <Suspense
      fallback={
        <div className={s.loader}>
          <Spinner size={50} />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};
