import moment from 'moment';
import types from './types.js';
import { showNotification, closeNotification } from '../Notification/actions.js';

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
      end_date: moment(endDate).add(1, 'minute').format('YYYY-MM-DD')
    }
  });

  if (res.status === 200) {
    dispatch({
      type: types.SET_RENTAL,
      payload: json
    });
    dispatch(closeNotification());
  } else {
    await dispatch({
      type: types.SET_RENTAL,
      payload: null
    });
    dispatch(showNotification({error: 'Sorry, these dates are not available!'}));
  }

}

export const rent = rental => async(dispatch, getState, { api }) => {

}
