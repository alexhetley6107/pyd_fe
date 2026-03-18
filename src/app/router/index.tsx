import { createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { privateRoutes } from './privateRoutes';
import { GlobalLayout } from '../layouts/GlobalLayout';

export const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [...publicRoutes, ...privateRoutes],
  },
]);
