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
      buildDate: (new Date()).getFullYear() + "-" + ((new Date()).getMonth() + 1) + "-" + (new Date()).getDate(),
      endDate: '',
      state: 'unpublish',
      questions: [],
    };
    //state.suverys.push(newSuvery);
    state.activeSuvery = newSuvery;
  },
  EDIT_SUVERY(state, suvery) {
    // 修改原始数据 
    state.activeSuvery = suvery;
    for (var i = 0; i < state.suverys.length; i++) {
      if(state.suverys[i].id === suvery.id){
        state.suverys[i] = suvery;
        return;
      }
    };
    state.suverys.push(state.activeSuvery);
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
  DELETE_QUESTION(state, question) {
    state.activeSuvery.questions.$remove(question);
  },
  COPY_QUESTION(state, question) {
    const newQustion = JSON.parse(JSON.stringify(question));
    const idx = state.activeSuvery.questions.indexOf(question);
    state.activeSuvery.questions.splice(idx, 0, newQustion);
  },
  QUESTION_UP(state, question) {
    const newQustion = JSON.parse(JSON.stringify(question));
    const idx = state.activeSuvery.questions.indexOf(question);
    state.activeSuvery.questions.splice(idx - 1, 0, newQustion);
    state.activeSuvery.questions.$remove(question);
  },
  QUESTION_DOWN(state, question) {
    const newQustion = JSON.parse(JSON.stringify(question));
    const idx = state.activeSuvery.questions.indexOf(question);
    state.activeSuvery.questions.$remove(question);
    state.activeSuvery.questions.splice(idx + 1, 0, newQustion);
  },
  DELETE_OPTION(state, question, option) {
    const idx = state.activeSuvery.questions.indexOf(question);
    state.activeSuvery.questions[idx].options.$remove(option);
  },
  ADD_OPTION(state, question) {
    const idx = state.activeSuvery.questions.indexOf(question);
    state.activeSuvery.questions[idx].options.push("选项" + (state.activeSuvery.questions[idx].options.length + 1));
  },
  TOGGLE_MANDATORY(state, question) {
    const idx = state.activeSuvery.questions.indexOf(question);
    console.log(state.activeSuvery.questions[idx].mandatory);
    state.activeSuvery.questions[idx].mandatory = !state.activeSuvery.questions[idx].mandatory;
  },
  DELETE_SUVERY(state) {
    for (var i = 0; i < state.suverys.length; i++) {
      if(state.suverys[i].id === state.activeSuvery.id){
        state.suverys.$remove(state.suverys[i]);
        break;
      }
    };
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
