import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const GlobalLayout = () => {
  return (
    <Suspense fallback={<div style={{ height: "100dvh" }}>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};
