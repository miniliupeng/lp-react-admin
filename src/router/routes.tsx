import { Navigate, RouteObject } from 'react-router-dom';
import Login from '@/views/login';
import WebsshTerminal from '@/views/webssh/terminal';
import WebApiDoc from '@/views/webapi-doc';

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
// console.log(routerArray);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/webssh/terminal',
    element: <WebsshTerminal />
  },
  {
    path: '/webapi-doc',
    element: <WebApiDoc />
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />
  }
];

export default routes;
