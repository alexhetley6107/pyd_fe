import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterNames } from "../shared/constants";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Login"));

export const router = createBrowserRouter([
  {
    path: RouterNames.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: RouterNames.LOGIN,
    element: <Login />,
  },
]);
