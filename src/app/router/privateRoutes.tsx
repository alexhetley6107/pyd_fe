import type { RouteObject } from "react-router-dom";
import { MainLayout } from "@/app/layouts/MainLayout";
import { RouterNames } from "@/shared/constants";
import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/Dashboard"));

export const privateRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: RouterNames.DASHBOARD,
        element: <Dashboard />,
      },
    ],
  },
];
