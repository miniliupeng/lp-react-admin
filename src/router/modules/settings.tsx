import { Navigate, RouteObject } from 'react-router-dom';
import { LazyLoad } from '../LazyLoad';
import { lazy } from 'react';
import Layout from '@/layout';

export const settingsRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/settings',
        element: <Navigate to="/settings/user-login" />
      },
      {
        path: '/settings/user-login',
        element: LazyLoad(lazy(() => import('@/views/settings/user-login')))
      },
      {
        path: '/settings/system-settings',
        element: LazyLoad(lazy(() => import('@/views/settings/system-settings')))
      },
      {
        path: '/settings/network',
        element: LazyLoad(lazy(() => import('@/views/settings/network')))
      }
    ]
  }
];
