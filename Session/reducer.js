import types from './types.js';

export default (state = null, action) => {

  switch(action.type) {
    case types.FACEBOOK_LOGIN:
      return action.payload;
    case types.SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }

};
