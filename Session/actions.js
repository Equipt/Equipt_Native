import types from './types.js';
import { AsyncStorage } from "react-native";
import { showNotification } from './../Notification/actions.js';
import { Facebook } from 'expo';

export const login = (data, navigation) => async (dispatch, getState, { api }) => {
  try {
    const { json, res } = await api.create('/session', data);
    if (res.status === 200) {
      await AsyncStorage.setItem('api_token', json.apiKey);
      dispatch({
        type: types.SET_CURRENT_USER,
        payload: json
      });
    } else {
      dispatch(showNotification(json));
    }
  } catch(err) {
    console.log('ERROR', err);
  }
};

export const facebookLogin = () => async (dispatch) => {
  try {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '734059966732084',
      { permissions: ["public_profile"] }
    )
    console.log(type, token);
  } catch(err) {
    console.log(err);
  }
};

export const fetchCurrentUser = (navigator) => async (dispatch, getState, { api }) => {
  try {
    const { json, res } = await api.get('/session/fetch_user');
    if (res.status === 200) {
      dispatch({
        type: types.SET_CURRENT_USER,
        payload: json
      });
    } else {
      dispatch({
        type: types.SET_CURRENT_USER,
        payload: null
      });
    }
  } catch(err) {
    console.log('ERROR', err);
  }
}

export const signOut = () => async (dispatch, getState, { api }) => {
  try {
    await AsyncStorage.clear();
    dispatch({
      type: types.SET_CURRENT_USER,
      payload: null
    });
  } catch(err) {
    console.log('Error', err);
  }

}
