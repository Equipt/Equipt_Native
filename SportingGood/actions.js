import types from './types.js';

import { showNotification } from '../Notification/actions.js';

export const fetchSportingGood = slug => async(dispatch, getState, { api }) => {

  dispatch(setSportingGood({}));

  const { json, res } = await api.get(`/sporting_goods/${slug}`);

  console.log('SPORTING_GOOD', json);

  if (res.status === 200) {
    dispatch(setSportingGood(json));
  } else {
    dispatch(showNotification(json));
  }

}

export default setSportingGood = sportingGood => ({
  type: types.SET_SPORTING_GOOD,
  payload: sportingGood
});
