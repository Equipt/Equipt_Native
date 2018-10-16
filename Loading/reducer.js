import types from './types.js';

export default (state = false, action) => {

  switch(action.type) {
    case types.LOADING:
      return action.payload;
    default:
      return state;
  }

};
