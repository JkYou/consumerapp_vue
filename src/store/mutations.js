import * as types from './mutation-types';
import {
  setStore,
  getStore,
  removeStore
} from '../util/util'

const mutations = {
  [types.SET_KEYWORD](state, keyword) {
    state.keyword = keyword;
  }
};
export default mutations;
