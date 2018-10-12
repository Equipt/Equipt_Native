import types from './types.js';

export default (state = {}, action) => {

  switch(action.type) {
    case types.FACEBOOK_LOGIN:
      return action.payload;
    break;
    default:
      return state;
  }

};
