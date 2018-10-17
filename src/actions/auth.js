import axios from 'axios';
import * as types from './types';
import { authRequestUri } from '../config';

export function submitAuthRequest(credentials) {
  return dispatch => {
    dispatch(authRequest());
    return axios.post(authRequestUri, credentials)
      .then(response => dispatch(
        authSuccess(response.data))
      )
      .catch(error => dispatch(
        authFailure(error.toString))
      );
  };
}

export const authRequest = () => ({
  type: types.AUTH_REQUEST
});

export const authSuccess = payload => ({
  type: types.AUTH_SUCCESS,
  payload
});

export const authFailure = payload => ({
  type: types.AUTH_FAILURE,
  payload
});

