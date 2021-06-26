import { RouteRecordRaw } from 'vue-router';
import DefaultLayout from './components/DefaultLayout';
import ErrorLayout from './components/ErrorLayout';
import { first, number } from './helpers/fns';

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
          offset: number(first(route.query.offset)),
          limit: number(first(route.query.limit)),
        }),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorLayout,
    props: () => ({
      error: Object.assign(new Error('Page not found'), { statusCode: 404 }),
    }),
  },
];

export default routes;
