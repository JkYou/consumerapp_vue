import {SET_KEYWORD} from './mutation-types';
import {
  setStore,
  getStore,
  removeStore
} from '../util/util'

const mutations = {
  [SET_KEYWORD](state, keyword) {
    state.keyword = keyword;
  }
};
export default mutations;
