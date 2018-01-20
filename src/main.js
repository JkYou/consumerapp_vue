// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import mint from '@/library/mint'
import store from './store/'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
Vue.config.productionTip = false
Vue.prototype.axios = axios
axios.default.timeout = 5000
axios.defaults.baseURL = 'http://192.168.2.180:8080/imall/'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mint,
  store,
  template: '<App/>',
  components: { App }
})
