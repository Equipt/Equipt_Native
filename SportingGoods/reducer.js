import types from './types.js';

export default (state = [], action) => {
  switch(action.type) {
    case types.SET_SPORTING_GOODS:
      return action.payload;
    break;
    default:
      return state;
  }

};
