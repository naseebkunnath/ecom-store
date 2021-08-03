import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import CartCheckout from '../components/CartCheckout.vue'

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
  /*{
    path: '/shop',
    name: 'ShoppingCart',
    component: () => import("../views/ShoppingCart.vue")
  },*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router