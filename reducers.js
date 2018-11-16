import { combineReducers } from 'redux';

import session from './Session/reducer.js';
import notification from './Notification/reducer.js';
import sportingGood from './SportingGood/reducer.js';
import sportingGoods from './SportingGoods/reducer.js';
import rentals from './Rentals/reducer.js';
import rental from './Rental/reducer.js';
import loading from './Loading/reducer.js';
import form__address from './Address/reducer.js';

export default combineReducers({
  form__address,
  session,
  notification,
  sportingGood,
  sportingGoods,
  rental,
  rentals,
  loading
});
