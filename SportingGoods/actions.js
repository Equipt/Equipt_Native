import types from './types.js';

export const getSportingGoods = () => async (dispatch, getState, { api }) => {

  const { json, res } = await api.index('/sporting_goods');

  dispatch({
    type: types.SET_SPORTING_GOODS,
    payload: json.sporting_goods
  });

}
