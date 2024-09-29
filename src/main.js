import {createApp} from 'vue'
import App from './App.vue';
import router from './router'
import {createVuetify} from 'vuetify'


const vuetify = createVuetify();

const app = createApp(App)
            .use(vuetify)
            .use(router)
            .mount('#app')