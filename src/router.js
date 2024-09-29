import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/index.vue';
import About from './components/about.vue'
import Kalandarium from './components/kalandarium.vue'
import Contact from './components/contact.vue'




const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/kalandarium', component: Kalandarium},
    {path: '/contact', component: Contact}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;