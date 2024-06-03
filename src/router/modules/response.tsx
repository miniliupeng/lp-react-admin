import { Navigate, RouteObject } from 'react-router-dom';
import { LazyLoad } from '../LazyLoad';
import { lazy } from 'react';
import Layout from '@/layout';

export const responseRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/response',
        element: <Navigate to="/response/black-list" />
      },
      {
        path: '/response/black-list',
        element: LazyLoad(lazy(() => import('@/views/response/black-list')))
      }
    ]
  }
];
