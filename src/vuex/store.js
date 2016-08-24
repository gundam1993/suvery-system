import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  suverys: [],
  activeSuvery: {},
  editingSuvery: {},
  modalState: false,
};

const mutations = {
  //  初始化STORE
  INIT_STORE(state, data) {
    state.suverys = data.suverys;
    state.activeSuvery = data.activeSuvery;
  },
  NEW_SUVERY(state) {
    var newSuvery = {
      id: +new Date(),
      title: '',
      buildDate: new Date(),
      endDate: '',
      state: 'unpublish',
      questions: [],
    };
    state.suverys.push(newSuvery);
    state.activeSuvery = newSuvery;
  },
  EDIT_SUVERY(state) {
    // 修改原始数据
    for (var i = 0; i < state.suverys.length; i++) {
       if (state.suverys[i].id === state.activeSuvery.id) {
        state.suverys[i] = state.activeSuvery;
        break;
       }
     }
   },
  DELETE_SUVERY(state) {
    state.suverys.$remove(state.activeSuvery);
    state.activeSuvery = state.suverys[0] || {};
  },
  SET_ACTIVE_SUVERY(state, suverys) {
    state.activeSuvery = suverys;
  },
  TOGGLE_MODAL(state) {
    state.modalState = !state.modalState;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
