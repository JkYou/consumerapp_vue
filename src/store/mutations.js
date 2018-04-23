import {SET_KEYWORD,SET_BTN,SET_SCRO,SET_TOPIC} from './mutation-types';
const mutations = {
  [SET_KEYWORD](state, keyword) {
    state.keyword = keyword;
  },
  [SET_BTN](state,btn){
    state.btn = btn;
  },
  [SET_SCRO](state,scroll){
    state.scrollTo = scroll;
  },
  [SET_TOPIC](state,info){
    state.info=info;
  }
};
export default mutations;
