export default [

  {
    path: '/profile',
    meta: {
      name: '',
      requiresAuth: false,
    },
    component: () => import('@/views/profile'),
    children: [
      {
        path: '',
        component: () => import('@/components/profile'),
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/components/profile'),
      },
    ],
  },
];
