import { LocationQueryValue, RouteRecordRaw } from 'vue-router';
import DefaultLayout from './components/DefaultLayout';
import ErrorLayout from './components/ErrorLayout';

const first = (value: LocationQueryValue | LocationQueryValue[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

const number = (value: LocationQueryValue | undefined) => {
  if (!value) return undefined;
  const num = Number(value);
  return Number.isFinite(num) ? num : undefined;
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
