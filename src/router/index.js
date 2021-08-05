import _ from 'underscore';
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';

import Home from '../components/Home.vue'
import CartCheckout from '../components/CartCheckout.vue'
import CreateCustomer from '../components/CreateCustomer.vue'
import CustomerLogin from '../components/CustomerLogin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart/checkout',
    name: 'CartCheckout',
    component: CartCheckout
  },
  {
    path: '/signup',
    name: 'CreateCustomer',
    component: CreateCustomer
  },
  {
    path: '/login',
    name: 'CustomerLogin',
    component: CustomerLogin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/signup'];

  if(!_.contains(publicPages, to.path) && !store.getters.authUser) {
    return next('/login');
  }

  if(_.contains(publicPages, to.path) && store.getters.authUser) {
    return next('/');
  }

  next();
})

export default router