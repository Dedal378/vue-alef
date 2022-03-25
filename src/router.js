import { createRouter, createWebHistory } from 'vue-router'
import UserForm from './views/UserForm.vue'
import UserInfo from './views/UserInfo.vue'

export default createRouter({
  routes: [
    { path: '/vue-alef/', component: UserForm },
    { path: '/vue-alef/userinfo', component: UserInfo },
  ],
  history: createWebHistory(),
})
