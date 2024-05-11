import { Navigate, RouteObject } from 'react-router-dom';
import { LazyLoad } from '../LazyLoad';
import { lazy } from 'react';
import Layout from '@/layout';

export const homeRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Navigate to="/home/network-flow" />
      },
      {
        path: '/home/network-flow',
        element: LazyLoad(lazy(() => import('@/views/home/network-flow')))
      },
      {
        path: '/home/session-stats',
        element: LazyLoad(lazy(() => import('@/views/home/session-stats')))
      }
    ]
  }
];
