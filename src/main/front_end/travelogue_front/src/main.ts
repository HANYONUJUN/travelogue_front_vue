import { createApp } from 'vue'
import router from './router';
import App from './App.vue';
import VueScrollTo from 'vue-scrollto';

createApp(App).use(router).use(VueScrollTo).mount('#app')
