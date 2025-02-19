import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/sign-in',
    component: () => import('@/layouts/External.vue'),
    children: [
      {
        path: '', 
        component: () => import('@/pages/external/sign-in/Index.vue')
      },
      {
        path: 'password-recovery',
        component: () => import('@/pages/external/sign-in/PasswordRecovery.vue')
      },
    ]
  },
  {
    path: '/sign-up',
    component: () => import('@/layouts/External.vue'),
    children: [
      {
        path: '', 
        component: () => import('@/pages/external/sign-up/Index.vue')
      },
      {
        path: 'verification-code', 
        component: () => import('@/pages/external/sign-up/VerificationCode.vue')
      },
      {
        path: 'password', 
        component: () => import('@/pages/external/sign-up/Password.vue')
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