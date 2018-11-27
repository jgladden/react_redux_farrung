import axios from 'axios';
import * as types from './types';
import { postAuthUrl } from '../config';
import {
  parseJwt,
  setAuthTokenCookie,
  deleteAuthTokenCookie
} from 'utils/authUtil';

export function submitLogin(authObj) {
  return dispatch => {
    dispatch(postAuth());
    return axios.post(postAuthUrl, authObj)
      .then(response => {
        let error = response.data.error;
        if(!error) {
          let {
            token
          } = response.data;
          setAuthTokenCookie(token);
          return dispatch(
            postAuthSuccess(parseJwt(token))
          );
        }
        deleteAuthTokenCookie();      
        return dispatch(
          postAuthError(error)
        );
      })
      .catch(error => {
        deleteAuthTokenCookie();
        return dispatch(
          postAuthError(error.toString())
        );
      });
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

export function submitLogout() {
  return dispatch => {
    deleteAuthTokenCookie();
    dispatch(authLogout());
  };
}

export const authLogout = () => ({
  type: types.AUTH_LOGOUT
});
 
