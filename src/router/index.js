import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['@/pages/index'], resolve);
const juhuasuan = resolve => require(['@/pages/juhuasuan'], resolve);
const search = resolve => require(['@/pages/searchPage'], resolve);
const guide =resolve =>require(['@/pages/guide'],resolve);
const game =resolve =>require(['@/components/game'],resolve);
const  navClass = resolve => require(['@/components/navClass'],resolve)
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
      path:'/search',
      name: 'search',
      component:  search
    },{
      path:'/guide',
      name:'guide',
      component:guide,
      children:[{
        path: '/navcls',
        name: '测试',
        component:navClass
      }]
    },{
      path:'/game',
      name:'game',
      component:game
    }
  ]
})
