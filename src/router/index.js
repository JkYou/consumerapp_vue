import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import search from  '@/pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path:'/search',
      name:'search',
      component:search
    }
  ]
})
