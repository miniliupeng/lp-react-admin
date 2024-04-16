import { RouteObject } from 'react-router-dom';
import { LazyLoad } from '../LazyLoad';
import { lazy } from 'react';
import Layout from '@/layout';

export const errRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/menu/menu1',
        element: LazyLoad(lazy(() => import('@/views/menu/Menu1')))
      },
      {
        path: '/menu/menu2',
        element: LazyLoad(lazy(() => import('@/views/menu/Menu2')))
      }
    ]
  }
];
