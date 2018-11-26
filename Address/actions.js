import types from './types.js';

export const updatedAddressForm = address => ({
  type: types.FORM__ADDRESS_UPDATED,
  payload: address
})

export const updatePhone = number => ({
  type: types.FORM__PHONE_UPDATED,
  payload: { number }
})

export const toggleAutoComplete = () => ({
  type: types.FORM__ADDRESS_TOGGLE_AUTOCOMPLETE,
  payload: null
})

export const updateAddressField = (fieldName, value) => async(dispatch, getState) => {


}
