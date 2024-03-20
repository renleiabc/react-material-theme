import Routes from './routes';
import { createBrowserRouter } from 'react-router-dom';
import { RouterType } from '@/types';
import NoMatch from '@/pages/NoMatch/NoMatch';
import MainLayout from '@/pages/Layout/MainLayout';
import { AuthRoute, LoginRoute } from '@/router/AuthRoute';
import Login from '@/pages/Login/Login';

const AllRoutes: RouterType[] = [
  {
    path: '/login',
    element: (
      <LoginRoute>
        <Login />
      </LoginRoute>
    ),
    title: '',
    meta: {
      key: 1
    }
  },
  {
    path: '/',
    element: (
      <AuthRoute>
        <MainLayout />
      </AuthRoute>
    ),
    title: '',
    meta: {
      key: 2
    },
    children: [
      ...Routes,
      {
        path: '*',
        element: <NoMatch />,
        title: 'No Match',
        meta: {
          key: 0
        }
      }
    ]
  }
];
const Router = createBrowserRouter(AllRoutes);
export default Router;
