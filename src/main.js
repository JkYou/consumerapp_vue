// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import mint from '@/library/mint'
import store from './store/'
import FastClick from 'fastclick'
import  'animate.css'
FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.prototype.axios = axios
axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://www.19buy.top/service/imall/'
axios.defaults.baseURL = 'http://localhost:8088/'
  /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mint,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
