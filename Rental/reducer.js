import types from './types.js';

export default (state = null, action) => {

  switch(action.type) {
    case types.SET_RENTAL:
      return action.payload;
    default:
      return state;
  }

};
