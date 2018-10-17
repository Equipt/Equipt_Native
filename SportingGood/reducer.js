import types from './types.js';

export default (state = {}, action) => {

  switch(action.type) {
    case types.SET_SPORTING_GOOD:
      return action.payload;
    default:
      return state;
  }

};
