import Vue from 'vue'
import Router from 'vue-router'
import SellerProfile from '@/components/SellerProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Silk Road 3.0',
      component: SellerProfile
    },
    {
      path: '/profile/:id',
      name: 'Seller Profile',
      component: SellerProfile
    }
  ]
})
