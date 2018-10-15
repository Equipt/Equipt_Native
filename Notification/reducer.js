import types from './types.js';

export default (state = {
  isOpen: false,
  message: {}
}, action) => {
  switch(action.type) {
    case types.OPEN_NOTIFICATION:
      return action.payload;
    break;
    case types.CLOSE_NOTIFICATION:
      return action.payload;
    break;
    default:
      return state;
  }

};
