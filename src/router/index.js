import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import taoqiang from '@/pages/taoqiang'
import juhuasuan from '@/pages/juhuasuan'
import search from '@/pages/searchPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/juhuasuan',
      name: 'juhuasuan',
      component: juhuasuan
    },{
      path:'/taoqiang',
      name: 'taoqiang',
      component:taoqiang
    },{
      path:'/search',
      name: 'search',
      component:search
    }
  ]
})
