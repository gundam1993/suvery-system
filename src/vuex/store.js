import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  suverys: [],
  activeSuvery: {},
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
  EDIT_SUVERY(state, suvery) {
    // 修改原始数据 
    state.activeSuvery = suvery;
    for (var i = 0; i < state.suverys.length; i++) {
      if(state.suverys[i].id === suvery.id){
        state.suverys[i] = suvery;
        break;
      }
    };
  },
  ADD_QUESTION(state, type) {
    switch (type) {
      case "radio" :
        state.activeSuvery.questions.push({
          title:"单选题",
          type:"radio",
          options: ["选项1","选项2"],
        });
        break;
      case "checkbox" :
        state.activeSuvery.questions.push({
          title:"多选题",
          type:"checkbox",
          options: ["选项1","选项2","选项3","选项4"],
        });
        break;
      case "textarea" :
        state.activeSuvery.questions.push({
          title:"文本题",
          type:"textarea",
          mandatory: false,
        });
        break;
    }
  },
  DELETE_SUVERY(state) {
    state.suverys.$remove(state.activeSuvery);
    state.activeSuvery = state.suverys[0] || {};
  },
  SET_ACTIVE_SUVERY(state, suverys) {
    state.activeSuvery = JSON.parse(JSON.stringify(suverys));
  },
  TOGGLE_MODAL(state) {
    state.modalState = !state.modalState;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
