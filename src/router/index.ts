import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue';
import Layout from '../components/shared/Layout.vue';
import Main from '../views/Main.vue';

Vue.use(VueRouter)

const layoutRoutes = [
  {
    path: '',
    name: 'main',
    component: Main,
  },
];

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Home
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children : layoutRoutes,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
