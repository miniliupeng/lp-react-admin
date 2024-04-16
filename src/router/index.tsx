import { useRoutes } from 'react-router-dom';
import routes from './routes';

export default () => {
  return <>{useRoutes(routes)}</>;
};
