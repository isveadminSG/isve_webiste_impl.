import { createApp } from 'vue'
import {createHead} from '@vueuse/head'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import './assets/css/about.css'
import './assets/css/homepage.css'
import './assets/css/kalandarium.css'
import './assets/css/stadgar.css'
import component from 'vue-types'

const head = createHead();

createApp(App).use(head).use(router).mount('#app')
