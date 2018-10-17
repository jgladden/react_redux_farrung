import axios from 'axios';
import * as types from './types';
import { postAuthUrl } from '../config';

export function submitAuth(authObj) {
  return dispatch => {
    dispatch(postAuth());
    return axios.post(postAuthUrl, authObj)
      .then(response => dispatch(
        postAuthSuccess(response.data))
      )
      .catch(error => dispatch(
        postAuthError(error.toString()))
      );
  };
}

export const postAuth = () => ({
  type: types.POST_AUTH
});

export const postAuthSuccess = payload => ({
  type: types.POST_AUTH_SUCCESS,
  payload
});

export const postAuthError = payload => ({
  type: types.POST_AUTH_ERROR,
  payload
});

