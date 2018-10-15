import types from './types.js';

export const showNotification = data => ({
  type: types.OPEN_NOTIFICATION,
  payload: { isOpen: true, ...data }
})

export const closeNotification = () => ({
  type: types.CLOSE_NOTIFICATION,
  payload: { isOpen: false }
});
