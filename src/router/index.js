import Vue from 'vue'
import Router from 'vue-router'
import Input from '@/components/Input'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Input',
      component: Input
    },
    {
      path: '/Order',
      name: Order,
      component: Order
    }
  ]
})
