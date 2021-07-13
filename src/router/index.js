import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Frontdesk.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'Products',
        component: () => import('../views/Products.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Dashboard/Coupons.vue'),
      },
    ],
  },
  {
    path: '/Login',
    component: () => import('../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
