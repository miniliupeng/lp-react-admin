import { Navigate, RouteObject } from 'react-router-dom';
import { LazyLoad } from '../LazyLoad';
import { lazy } from 'react';
import Layout from '@/layout';

export const flowRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/flow',
        element: <Navigate to="/flow/capture" />
      },
      {
        path: '/flow/capture',
        element: LazyLoad(lazy(() => import('@/views/flow/capture')))
      },
      {
        path: '/flow/outgoing-log',
        element: LazyLoad(lazy(() => import('@/views/flow/outgoing-log')))
      },
      {
        path: '/flow/detection-tool',
        element: LazyLoad(lazy(() => import('@/views/flow/detection-tool')))
      }
    ]
  }
];
