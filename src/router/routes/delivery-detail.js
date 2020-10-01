export default [
  {
    path: '/delivery-detail',
    meta: {
      name: '',
      requiresAuth: false,
    },
    component: () => import('@/views/delivery-detail'),
    children: [
      {
        path: '',
        component: () => import('@/components/delivery-detail'),
      },
      {
        path: 'report-problem',
        meta: {
          name: 'report-problem',
          requiresAuth: false,
        },
        component: () => import('@/components/report-problem'),
      },
      {
        path: 'view-problem',
        meta: {
          name: 'view-problem',
          requiresAuth: false,
        },
        component: () => import('@/components/view-problem'),
      },
      {
        path: 'confirm-delivery',
        meta: {
          name: 'confirm-delivery',
          requiresAuth: false,
        },
        component: () => import('@/components/confirm-delivery'),
      },
    ],
  },
];
