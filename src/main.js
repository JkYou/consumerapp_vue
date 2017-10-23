// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import mint from '@/library/mint'

Vue.config.productionTip = false
Vue.prototype.axios = axios
axios.default.timeout = 5000
axios.defaults.baseURL = 'http://alpha.cnpawn.cn/factor/'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mint,
  template: '<App/>',
  components: { App }
})
