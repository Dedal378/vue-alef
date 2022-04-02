import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router.js'
import './assets/main.scss'

createApp(App).use(router).use(createPinia()).mount('#app')
