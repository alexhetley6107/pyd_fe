import { createBrowserRouter } from "react-router-dom";
import { GlobalLayout } from "../layouts/GlobalLayout";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoures";

export const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [...publicRoutes, ...privateRoutes],
  },
]);
