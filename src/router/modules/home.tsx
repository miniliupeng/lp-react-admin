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
        element: <Navigate to="/home/security-situation" />
      },
      {
        path: '/home/security-situation',
        element: LazyLoad(lazy(() => import('@/views/home/security-situation')))
      },
      {
        path: '/home/system-flow',
        element: LazyLoad(lazy(() => import('@/views/home/system-flow')))
      },
      {
        path: '/home/data-screen',
        element: LazyLoad(lazy(() => import('@/views/home/data-screen')))
      }
    ]
  }
];
