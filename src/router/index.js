import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Frontdesk.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/Product.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/Carts.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/Order.vue'),
      },
      {
        path: 'check',
        component: () => import('../views/Check.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '',
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
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/payment',
    component: () => import('../views/Payment.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
