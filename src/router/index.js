import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import searchPage from '@/pages/searchPage'
import goodsDetail from '@/pages/goodsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/search',
      name: 'searchPage',
      component: searchPage
    },{
      path:'/goodsdetail',
      component:goodsDetail
    }
  ]
})
