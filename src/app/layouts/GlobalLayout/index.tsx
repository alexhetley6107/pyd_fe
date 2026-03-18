import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const GlobalLayout = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Outlet />
    </Suspense>
  );
};
