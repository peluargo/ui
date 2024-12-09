import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import NoLayout from '@/layouts/NoLayout.vue'
import HomePage from '@/pages/HomePage.vue'
import GroupListPage from '@/pages/groups/GroupListPage.vue'
import GroupCreationPage from '@/pages/groups/GroupCreationPage.vue'
import SignInPage from '@/pages/sign-in/SignInPage.vue'
import SignUpPage from '@/pages/sign-up/SignUpPage.vue'
import SignUpPasswordCreationPage from '@/pages/sign-up/SignUpPasswordCreationPage.vue'
import SignUpEmailConfirmationPage from '@/pages/sign-up/SignUpEmailConfirmationPage.vue'
import UserProfilePage from '@/pages/users/UserProfilePage.vue'
import UserListPage from '@/pages/users/UserListPage.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
        {
            name: 'home',
            path: '',
            component: HomePage
        }
        ]
    },
    {
        path: '/sign-in',
        component: NoLayout,
        children: [
            {
                name: 'sign-in',
                path: '',
                component: SignInPage
            }
        ]
    },
    {
        path: '/sign-up',
        component: NoLayout,
        children: [
            {
                name: 'sign-up',
                path: '',
                component: SignUpPage
            },
            {
                name: 'sign-up-email-confirmation',
                path: 'email-confirmation',
                component: SignUpEmailConfirmationPage
            },
            {
                name: 'sign-up-password-creation',
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
                name: 'groups',
                path: '',
                component: GroupListPage
            },
            {
                path: 'new-group',
                component: GroupCreationPage
            }
        ]
    },
    {
        path: '/users',
        component: DefaultLayout,
        children: [
            {
                name: 'user-list',
                path: '',
                component: UserListPage
            },
            {
                name: 'user-profile',
                path: ':id',
                component: UserProfilePage
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
