function makeAction(type) {
  return({ dispatch }, ...args) => dispatch(type, ...args);
}

export const newSuvery = makeAction('NEW_SUVERY');

export const deleteSuvery = makeAction('DELETE_SUVERY');

export const setActiveSuvery = makeAction('SET_ACTIVE_SUVERY');

export const toggleModal = makeAction('TOGGLE_MODAL');

const initSuvery = {
  id: +new Date(),
  title: 'First Suvery',
  buildDate: new Date(),
  endDate: '',
  state: 'unpublish',
  content: [],
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
