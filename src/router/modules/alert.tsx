import { Navigate, RouteObject } from 'react-router-dom';
import { LazyLoad } from '../LazyLoad';
import { lazy } from 'react';
import Layout from '@/layout';

export const alertRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/alert',
        element: <Navigate to="/alert/alarm-list" />
      },
      {
        path: '/alert/alarm-list',
        element: LazyLoad(lazy(() => import('@/views/alert/alarm-list')))
      },
      {
        path: '/alert/attacker-tracking',
        element: LazyLoad(lazy(() => import('@/views/alert/attacker-tracking')))
      }
    ]
  }
];
