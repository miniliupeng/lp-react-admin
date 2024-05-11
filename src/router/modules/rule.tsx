import { Navigate, RouteObject } from 'react-router-dom';
import { LazyLoad } from '../LazyLoad';
import { lazy } from 'react';
import Layout from '@/layout';

export const ruleRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/rule',
        element: <Navigate to="/rule/ssl" />
      },
      {
        path: '/rule/ssl',
        element: LazyLoad(lazy(() => import('@/views/rule/ssl')))
      }
    ]
  }
];
