import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { RouterNames } from "@/shared/constants";
import { AuthLayout } from "@/app/layouts/AuthLayout";
import { CheckAuth } from "@/app/layouts/CheckAuth";

const Login = lazy(() => import("@/pages/Login"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export const publicRoutes: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: RouterNames.LOGIN,
        element: <Login />,
      },
    ],
  },
  {
    path: RouterNames.BASE,
    element: <CheckAuth />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
