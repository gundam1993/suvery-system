function makeAction(type) {
  return({ dispatch }, ...args) => dispatch(type, ...args);
}

export const newSuvery = makeAction('NEW_SUVERY');

export const deleteSuvery = makeAction('DELETE_SUVERY');

export const setActiveSuvery = makeAction('SET_ACTIVE_SUVERY');

export const toggleModal = makeAction('TOGGLE_MODAL');

export const editSuvery = makeAction('EDIT_SUVERY');

const initSuvery = {
  id: +new Date(),
  title: 'First Suvery',
  buildDate: new Date(),
  endDate: '',
  state: 'unpublish',
  questions: [{
    title:"单选题",
    type:"radio",
    options: ["选项1","选项2"],
  },{
    title:"多选题",
    type:"checkbox",
    options: ["选项1","选项2","选项3","选项4"],
  },{
    title:"文本题",
    type:"textarea",
    mandatory: false,
  }],
};

const initData = {
  suverys: [initSuvery],
  activeSuvery: initSuvery,
  editingSuvery: {},
  modalState: false,
};

export const initStore = ({ dispatch }) => {
  dispatch('INIT_STORE', initData);
};
