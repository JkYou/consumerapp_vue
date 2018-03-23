import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['@/pages/index'], resolve);
const taoqiang = resolve => require(['@/pages/taoqiang'], resolve);
const juhuasuan = resolve => require(['@/pages/juhuasuan'], resolve);
const search = resolve => require(['@/pages/searchPage'], resolve);

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
      component: taoqiang
    },{
      path:'/search',
      name: 'search',
      component:  search
    }
  ]
})
