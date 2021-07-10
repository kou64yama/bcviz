import { RouteRecordRaw } from 'vue-router';
import DefaultLayout from './components/DefaultLayout';
import ErrorLayout, { ErrorDetails } from './components/ErrorLayout';
import { first, number } from './helpers/fns';

const notFound: ErrorDetails = {
  message: 'Page not found',
  statusCode: 404,
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        component: () => import('./pages/Home'),
      },
      {
        path: '/data',
        component: () => import('./pages/DataLoader'),
        props: (route) => ({
          offset: [route.query.offset].map(first).map(number)[0],
          limit: [route.query.limit].map(first).map(number)[0],
        }),
      },
      {
        path: '/:pathMatch(.*)*',
        component: ErrorLayout,
        props: () => ({ error: notFound }),
      },
    ],
  },
];

export default routes;
