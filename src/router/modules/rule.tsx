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
        element: <Navigate to="/rule/detection-protocol" />
      },
      {
        path: '/rule/detection-protocol',
        element: LazyLoad(lazy(() => import('@/views/rule/detection-protocol')))
      }
    ]
  }
];
