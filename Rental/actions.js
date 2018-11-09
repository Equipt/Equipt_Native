import moment from 'moment';
import types from './types.js';
import { showNotification, closeNotification } from '../Notification/actions.js';
import { Alert } from 'react-native';

export const selectRental = (range) => async(dispatch, getState, { api }) => {

  const { startDate, endDate } = range;
  const { sportingGood } = getState();

  if (!startDate) return;

  const formattedStartDate = moment(startDate).format('YYYY-MM-DD');
  const formattedEndDate = endDate ? moment(endDate, 'YYYY-MM-DD').add(1, 'minute') : formattedStartDate;

  await dispatch(clearRental());

  const { json, res } = await api.create(`/sporting_goods/${ sportingGood.slug }/rentals/check_availability`, {
    rental: {
      start_date: formattedStartDate,
      end_date: formattedEndDate
    }
  });

  if (res.status === 200) {
    await dispatch(setRental(json));
    dispatch(closeNotification());
  } else {
    await dispatch(clearRental());
    dispatch(showNotification({ error: 'Sorry, these dates are not available!' }));
  }

}

export const rent = (rental, cb) => async(dispatch, getState, { api, navigate }) => {

  const { rental, sportingGood } = getState();

  Alert.alert(
    'Terms and Conditions',
    'Do you agree to the terms and conditions',
    [
      {
        text: 'Yes',
        onPress: async() => {
          rental.agreed_to_terms = true;
          const { json, res } = await api.create(`/sporting_goods/${ sportingGood.slug }/rentals`, rental);
          if (res.status === 200) {
            await dispatch(setRental(json));
            dispatch(showNotification({ info: 'Rental has been processed!' }));
            cb();
          } else if (json.errors) {
            dispatch(showNotification({ error: Object.values(json.errors) }));
          } else {
            await dispatch(clearRental());
            dispatch(showNotification({ error: 'Sorry, there was an issue processing this rental!' }));
          }
          navigate('Rental', {
            rental_hash: json.hashId,
            sporting_good_slug: json.sportingGood.slug
          });
        }
      },
      {
        text: 'Find Out More',
        onPress: () => console.log('find out more')
      }
    ]
  )

}

export const findRental = (hashId) => async(dispatch, getState, { api, navigate }) => {

  // const { json, res } = await api.show(`/sporting_goods/${ slug }/rentals/${ hashId }`);

  const { rentals } = getState();

  const rental = rentals.filter(rental => rental.hashId === hashId)[0];

  dispatch(setRental(rental));

}


export const setRental = rental => ({
  type: types.SET_RENTAL,
  payload: rental
});

export const clearRental = () => ({
  type: types.SET_RENTAL,
  payload: null
});
