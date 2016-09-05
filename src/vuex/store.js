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
    if (window.localStorage.suverySystem) {
      const localdata = JSON.parse(window.localStorage.suverySystem);
      state.suverys = localdata.suverys;
      state.activeSuvery = localdata.activeSuvery;
    }else{
      const newdata = JSON.stringify(data);
      window.localStorage.suverySystem = newdata;
      state.suverys = data.suverys;
      state.activeSuvery = data.activeSuvery;
    }
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
    state.activeSuvery = newSuvery;
  },
  EDIT_SUVERY(state, suvery) {
    // 修改原始数据 
    state.activeSuvery = suvery;
    for (var i = 0; i < state.suverys.length; i++) {
      if(state.suverys[i].id === suvery.id){
        state.suverys[i] = suvery;
        window.localStorage.suverySystem = JSON.stringify(state);
        return;
      }
    };
    state.suverys.push(state.activeSuvery);
    window.localStorage.suverySystem = JSON.stringify(state);
  },
  ADD_QUESTION(state, type) {
    switch (type) {
      case "radio" :
        state.activeSuvery.questions.push({
          title:"单选题",
          type:"radio",
          options: ["选项1","选项2"],
          choose: "",
        });
        break;
      case "checkbox" :
        state.activeSuvery.questions.push({
          title:"多选题",
          type:"checkbox",
          options: ["选项1","选项2","选项3","选项4"],
          choose: [],
        });
        break;
      case "textarea" :
        state.activeSuvery.questions.push({
          title:"文本题",
          type:"textarea",
          mandatory: false,
          content: "",
        });
        break;
    }
  },
  DELETE_QUESTION(state, question) {
    state.activeSuvery.questions.$remove(question);
    window.localStorage.suverySystem = JSON.stringify(state);
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
  SET_END_DATE(state, date) {
    state.activeSuvery.endDate = date;
  },
  PUBLISH_SUVERY(state) {
    for(let question of state.activeSuvery.questions) {
      question.results = {};
      if (question.type !== "textarea") {
        for (let option of question.options) {
          question.results[option] = 0;
        }
        if (question.type === 'radio') {
          question.choose = "";
        }else{
          question.choose = [];
        }
      }else{
        question.results.effectiveResults = 0;
      }
      question.resultsNum = 0;
    }
    state.activeSuvery.state = "publish";
  },
  DELETE_SUVERY(state) {
    for (var i = 0; i < state.suverys.length; i++) {
      if(state.suverys[i].id === state.activeSuvery.id){
        state.suverys.$remove(state.suverys[i]);
        break;
      }
    };
  },
  SUBMIT_SUVERY(state) {
    for (let question of state.activeSuvery.questions) {
      if (question.type === "radio") {
        question.results[question.choose] ++;
        question.choose = "";
      }else if (question.type === "checkbox") {
        question.choose.forEach(function (v) {
          question.results[v] ++;
        });
        question.choose = [];
      }else {
        question.results.allResults ++;
        if (question.content) {
          question.results.effectiveResults ++;
          question.content = "";
        }
      }
      question.resultsNum ++;
    }
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
