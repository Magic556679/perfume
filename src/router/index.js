import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/fronted/Frontdesk.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/fronted/Home.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/fronted/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/fronted/Product.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/fronted/Carts.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/fronted/Order.vue'),
      },
      {
        path: 'check',
        component: () => import('../views/fronted/Check.vue'),
      },
      {
        path: 'favorite',
        component: () => import('../views/fronted/Favorite.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/fronted/About.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/backed/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/backed/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/backed/Coupons.vue'),
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
