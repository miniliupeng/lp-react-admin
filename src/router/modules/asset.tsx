import { Navigate, RouteObject } from 'react-router-dom';
import { LazyLoad } from '../LazyLoad';
import { lazy } from 'react';
import Layout from '@/layout';

export const ruleRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/asset',
        element: <Navigate to="/asset/weak-password" />
      },
      {
        path: '/asset/weak-password',
        element: LazyLoad(lazy(() => import('@/views/asset/weak-password')))
      },
      {
        path: '/asset/sensitive-info',
        element: LazyLoad(lazy(() => import('@/views/asset/sensitive-info')))
      }
    ]
  }
];
