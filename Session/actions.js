import types from './types.js';
import { AsyncStorage } from "react-native";
import { showNotification } from './../Notification/actions.js';
import { Facebook } from 'expo';
import { isLoading } from '../Loading/actions.js';


// Login User
export const login = (data, navigation) => async (dispatch, getState, { api }) => {
  const { json, res } = await api.create('/session', data);
  if (res.status === 200) {
    await AsyncStorage.setItem('api_token', json.apiKey);
    dispatch(setCurrentUser(json));
  } else {
    dispatch(showNotification(json));
  }
};

// Register User
export const register = (user, navigation) => async(dispatch, getState, { api }) => {
  const { json, res } = await api.create('/user', { user });
  if (res.status === 200) {
    await AsyncStorage.setItem('api_token', json.apiKey);
  }
  dispatch(setCurrentUser(json));
};

// Facebook Login
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

// Fetch Current User
export const fetchCurrentUser = () => async (dispatch, getState, { api }) => {
  try {

    dispatch(isLoading(true));

    const { json, res } = await api.get('/session/fetch_user');

    if (res.status === 200) {
      dispatch(setCurrentUser(json));
    } else {
      dispatch(setCurrentUser(null));
    }

  } catch(err) {
    dispatch(setCurrentUser(null));
  } finally {
    dispatch(isLoading(false));
  }
}

export const signOut = () => async (dispatch, getState, { api }) => {
  dispatch(setCurrentUser(null));
  try {
    await AsyncStorage.clear();
  } catch(err) {
    console.log('Error', err);
  }

}

export default setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  payload: user
});
