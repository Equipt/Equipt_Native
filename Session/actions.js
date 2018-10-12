import types from './types.js';

import { Facebook } from 'expo';

export const login = sessionParam => async (dispatch) => {

  console.log(sessionParam);

}

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



}
