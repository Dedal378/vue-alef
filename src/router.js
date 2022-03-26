import { createRouter, createWebHistory } from 'vue-router'

const UserForm = () => import('./views/UserForm.vue')
const UserInfo = () => import('./views/UserInfo.vue')

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/vue-alef/', component: UserForm, alias: '/' },
    { path: '/vue-alef/userinfo', component: UserInfo },
  ],
})
