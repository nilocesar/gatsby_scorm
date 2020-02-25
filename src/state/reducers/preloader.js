const initialState = {
  preloaderStatus: true
};

const TYPE_EVENT = 'PRELOADER_EVENT';

export const preloaderMode = ( preloaderStatus = true ) => ({ type: TYPE_EVENT, preloaderStatus });

export default (state = initialState, action) => {
switch (action.type) {
  case TYPE_EVENT:
      {
        return { ...state, preloaderStatus: action.preloaderStatus }
      }
  default:
      return state;
  }
};

