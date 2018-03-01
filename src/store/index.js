import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './action';

Vue.use(Vuex);

export default  Vuex.Store({
  state: {
    registrations: [],
    key: [
        {id: 1, name: 'Max', registered: false}, 
    ]
  },
  getters,
  mutations,
  actions
})
