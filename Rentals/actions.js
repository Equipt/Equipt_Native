import types from './types.js';

export const fetchRentals = () => async(dispatch, getState, { api }) => {

  const { json, res } = await api.get('/owner/rentals');

  dispatch({
    type: types.FETCH_RENTALS,
    payload: json
  });

}
