import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Product from '@/components/Product'
import Checkout from '@/components/Checkout'
import Confirm from '@/components/Confirm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/product/:product_id',
      component: Product,
      name: 'product',
      props: true
    },
    {
      path: '/product/:product_id/checkout',
      component: Checkout,
      name: 'checkout',
      props: true
    },
    {
      path: '/product/:product_id/confirm',
      component: Confirm,
      name: 'confirm',
      props: true
    }
  ]
})
