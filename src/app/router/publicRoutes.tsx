import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { RouterNames } from "@/shared/constants";
import { AuthLayout } from "@/app/layouts/AuthLayout";
import { CheckAuth } from "@/app/layouts/CheckAuth";

const NotFound = lazy(() => import("@/pages/NotFound"));
const Login = lazy(() => import("@/pages/Login"));
const Signup = lazy(() => import("@/pages/Signup"));

const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));
const ResetPassword = lazy(() => import("@/pages/ResetPassword"));

export const publicRoutes: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: RouterNames.LOGIN,
        element: <Login />,
      },
      {
        path: RouterNames.SIGNUP,
        element: <Signup />,
      },
      {
        path: RouterNames.FORGOT_PASSWORD,
        element: <ForgotPassword />,
      },
      {
        path: RouterNames.RESET_PASSWORD,
        element: <ResetPassword />,
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
