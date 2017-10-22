// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'

Vue.config.productionTip = false
Vue.prototype.axios = axios
axios.default.timeout = 5000
axios.defaults.baseURL = 'http://alpha.cnpawn.cn/factor/'
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
