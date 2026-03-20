import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import Product from '@/components/Product.vue'
import Checkout from '@/components/Checkout.vue'
import Confirm from '@/components/Confirm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/product/:product_id',
    name: 'product',
    component: Product,
    props: true
  },
  {
    path: '/product/:product_id/checkout',
    name: 'checkout',
    component: Checkout,
    props: true
  },
  {
    path: '/product/:product_id/confirm',
    name: 'confirm',
    component: Confirm,
    props: true
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
