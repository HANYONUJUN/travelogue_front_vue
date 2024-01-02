import { createRouter, createWebHistory } from "vue-router";
import Main from '../src/assets/components/MainPage.vue'
import Login from '../src/assets/components/LoginPage.vue'

const routes = [
  
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  
  
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = createRouter({
  scrollBehavior(){
    return {top: 0};
  },
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;