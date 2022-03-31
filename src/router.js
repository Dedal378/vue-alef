import { createRouter, createWebHistory } from 'vue-router'

const UserForm = () => import('./views/UserForm.vue')
const UserInfo = () => import('./views/UserInfo.vue')
const Page404 = () => import('./views/Page404.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/vue-alef/', component: UserForm, name: 'form', alias: '/' },
    { path: '/vue-alef/userinfo', component: UserInfo, name: 'preview', props: true },
    { path: '/:notFound(.*)', component: Page404, name: 'page404' },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
