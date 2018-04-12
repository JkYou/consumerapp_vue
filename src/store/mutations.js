import {SET_KEYWORD,SET_BTN,SET_SCRO} from './mutation-types';
const mutations = {
  [SET_KEYWORD](state, keyword) {
    state.keyword = keyword;
  },
  [SET_BTN](state,btn){
    state.btn = btn;
  },
  [SET_SCRO](state,scroll){
    state.scrollTo = scroll;
  }
};
export default mutations;
