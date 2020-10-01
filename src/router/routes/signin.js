export default [
  {
    path: '*',
    meta: {
      name: '',
      requiresAuth: true,
    },
    redirect: {
      path: '/signin',
    },
  },
  {
    path: '/',
    meta: {
      name: '',
      requiresAuth: false,
    },
    component: () => import('@/views/signin'),
    children: [
      {
        path: '',
        component: () => import('@/components/signin'),
      },
      {
        path: 'signin',
        name: 'signin',
        component: () => import('@/components/signin'),
      },
    ],
  },
];
