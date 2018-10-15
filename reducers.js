import { combineReducers } from 'redux';

import session from './Session/reducer.js';
import notification from './Notification/reducer.js';
import sportingGoods from './SportingGoods/reducer.js';

export default combineReducers({
  session,
  notification,
  sportingGoods
});
