import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('@/layouts/External.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/external/login/Index.vue')
      },
    ]
  },
  {
    path: '/forgot-my-password',
    component: () => import('@/layouts/External.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/external/forgot-my-password/Index.vue')
      },
      {
        path: 'send-verification-code',
        component: () => import('@/pages/external/forgot-my-password/send-verification-code/Index.vue')
      },
      {
        path: 'confirm-verification-code',
        component: () => import('@/pages/external/forgot-my-password/confirm-verification-code/Index.vue')
      },
      {
        path: 'set-new-password',
        component: () => import('@/pages/external/forgot-my-password/set-new-password/Index.vue')
      },
    ]
  },
  {
    path: '/create-a-new-account',
    component: () => import('@/layouts/External.vue'),
    children: [
      {
        path: '',
        redirect: { path: '/create-a-new-account/check-email-availability' }
      },
      {
        path: 'check-email-availability',
        component: () => import('@/pages/external/create-a-new-account/check-email-availability/Index.vue')
      },
      {
        path: 'send-verification-code',
        component: () => import('@/pages/external/create-a-new-account/send-verification-code/Index.vue')
      },
      {
        path: 'confirm-verification-code',
        component: () => import('@/pages/external/create-a-new-account/confirm-verification-code/Index.vue')
      },
      {
        path: 'set-password',
        component: () => import('@/pages/external/create-a-new-account/set-password/Index.vue')
      },
    ]
  },
  {
    path: '/home',
    component: () => import('@/layouts/Internal.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/internal/home/Index.vue')
      },
    ]
  },
  {
    path: '/profile',
    component: () => import('@/layouts/Internal.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/internal/profile/Index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
