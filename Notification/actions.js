import types from './types.js';

const timeShown = 5000;

let closeNotificationTimeout;

export const showNotification = data => async(dispatch) => {

  clearTimeout(closeNotificationTimeout);

  dispatch({
    type: types.OPEN_NOTIFICATION,
    payload: { isOpen: true, ...data }
  });

  closeNotificationTimeout = setTimeout(() => dispatch(closeNotification()), timeShown);

}

export const closeNotification = () => ({
  type: types.CLOSE_NOTIFICATION,
  payload: { isOpen: false }
});
