import type { RouteObject } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { RouterNames } from "../../shared/constants";
import Dashboard from "../../pages/Dashboard";

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
