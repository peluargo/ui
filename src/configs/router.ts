import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import CenteredLayout from '@/layouts/CenteredLayout.vue'
import HomePage from '@/pages/HomePage.vue'
import GroupListPage from '@/pages/groups/GroupListPage.vue'
import GroupCreationPage from '@/pages/groups/GroupCreationPage.vue'
import SignInPage from '@/pages/sign-in/SignInPage.vue'
import SignUpPage from '@/pages/sign-up/SignUpPage.vue'
import SignUpPasswordCreationPage from '@/pages/sign-up/SignUpPasswordCreationPage.vue'
import SignUpEmailConfirmationPage from '@/pages/sign-up/SignUpEmailConfirmationPage.vue'

const routes = [
  { 
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: HomePage
      }
    ]
  },
  { 
    path: '/sign-in',
    component: CenteredLayout,
    children: [
      {
        path: '',
        component: SignInPage
      }
    ]
  },
  { 
    path: '/sign-up',
    component: CenteredLayout,
    children: [
      {
        path: '',
        component: SignUpPage
      },
      {
        path: 'email-confirmation',
        component: SignUpEmailConfirmationPage
      },
      {
        path: 'password-creation',
        component: SignUpPasswordCreationPage
      }
    ]
  },
  { 
    path: '/groups',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: GroupListPage
      },
      {
        path: 'new-group',
        component: GroupCreationPage
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router