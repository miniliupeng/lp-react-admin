import { RouteObject } from 'react-router-dom';
import { LazyLoad } from '../LazyLoad';
import { lazy } from 'react';

export const errRoutes: RouteObject[] = [
  {
    path: '/403',
    element: LazyLoad(lazy(() => import('@/views/error/403')))
  },
  {
    path: '/404',
    element: LazyLoad(lazy(() => import('@/views/error/404')))
  }
];
