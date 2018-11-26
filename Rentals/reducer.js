import types from './types.js';

export default (state = null, action) => {

  switch(action.type) {
    case types.FETCH_RENTALS:
      return action.payload.reverse();
    default:
      return state;
  }

};
