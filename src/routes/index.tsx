import CircularProgress from '@mui/material/CircularProgress';
import { FC, Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router';

import { MainLayout } from '@/components/layout/MainLayout';
import { Poker } from '@/pages/Poker';

const Empty: FC = () => {
  return (
    <>
      <h2>Ooops, content is not found :( </h2>
    </>
  );
};

export const AppRouter: FC = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Poker />,
      children: [{ path: '*', element: <Empty /> }],
    },
  ]);
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div>
            <CircularProgress />
          </div>
        }
      >
        {elements}
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};
