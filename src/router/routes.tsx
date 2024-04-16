import { Navigate, RouteObject } from 'react-router-dom';
import Login from '@/views/login';

// * 导入所有router
const metaRouters = import.meta.glob('./modules/*.tsx', { eager: true }) as Record<
  string,
  Record<string, RouteObject[]>
>;

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key) => {
    routerArray.push(...metaRouters[item][key]);
  });
});

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/login',
    element: <Login />
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />
  }
];

export default routes;