import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import s from "./GlobalLayout.module.css";
import { Spinner } from "@/shared/ui";

export const GlobalLayout = () => {
  return (
    <Suspense
      fallback={
        <div className={s.wrapper}>
          <Spinner size={50} />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};
