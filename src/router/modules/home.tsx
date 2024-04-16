import { RouteObject } from 'react-router-dom';
import { LazyLoad } from '../LazyLoad';
import { lazy } from 'react';
import Layout from '@/layout';

export const errRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: LazyLoad(lazy(() => import('@/views/home')))
      }
    ]
  }
];
