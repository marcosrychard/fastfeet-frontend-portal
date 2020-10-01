export default [
  {
    path: '/portal',
    meta: {
      name: 'portal',
      requiresAuth: false,
    },
    component: () => import('@/views/portal'),
    children: [
      {
        path: '',
        redirect: {
          path: '/portal/home',
        },
      },
      {
        path: 'home',
        meta: {
          name: 'home',
          requiresAuth: false,
        },
        component: () => import('@/components/home'),
      },
      {
        path: 'pending',
        meta: {
          name: 'pendings',
          requiresAuth: false,
        },
        component: () => import('@/components/pending'),
      },
      {
        path: 'delivered',
        meta: {
          name: 'delivered',
          requiresAuth: false,
        },
        component: () => import('@/components/delivered'),
      },
    ],
  },
];
