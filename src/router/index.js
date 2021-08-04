import _ from 'underscore';
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import CartCheckout from '../components/CartCheckout.vue'
import CreateCustomer from '../components/CreateCustomer.vue'
import CustomerLogin from '../components/CustomerLogin.vue'

import auth from '../services/authService';

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

  console.log(to.path, publicPages);

  if(!_.contains(publicPages, to.path) && !auth.getCurrentUser()) {
    return next('/signup');
  }

  next();
})

export default router