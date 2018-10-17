import types from './types.js';

export const isLoading = isLoading => ({
  type: types.LOADING,
  payload: isLoading
})
