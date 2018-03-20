import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './action';

Vue.use(Vuex);

const state = {
	keyword: 111, // 关键字

}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
