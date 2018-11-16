import types from './types.js';

const defaultState = {
  address: {},
  phone: {},
  autocomplete: true
}

export default (state = defaultState, action) => {

  switch(action.type) {
    case types.FORM__ADDRESS_UPDATED:
      return { ...state, address: action.payload, autocomplete: false };
    case types.FORM__ADDRESS_TOGGLE_AUTOCOMPLETE:
      return { ...state, autocomplete: !state.autocomplete };
    case types.FORM__ADDRESS_UPDATED_PHONE:
      return { ...state, phone: action.payload };
    default:
      return state;
  }

};
