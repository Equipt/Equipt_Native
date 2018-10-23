import moment from 'moment';
import types from './types.js';
import { showNotification } from '../Notification/actions.js';

export const selectRental = (range, sportingGood) => async(dispatch, getState, { api }) => {

  const { startDate, endDate } = range;
  const { slug } = sportingGood;

  if (!startDate || !endDate) return;

  dispatch({
    type: types.SET_RENTAL,
    payload: null
  });

  const { json, res } = await api.create(`/sporting_goods/${ slug }/rentals/check_availability`, {
    rental: {
      start_date: moment(startDate).format('YYYY-MM-DD'),
      end_date: moment(endDate).format('YYYY-MM-DD')
    }
  });

  if (res.status === 200) {
    dispatch({
      type: types.SET_RENTAL,
      payload: json
    });
  } else {
    dispatch(showNotification(json));
  }

}

export const rent = rental => async(dispatch, getState, { api }) => {

}
