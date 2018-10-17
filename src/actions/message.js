import axios from 'axios';
import * as types from './types';
import { postMessageUrl } from '../config';

export function submitMessage(messageObj) {
  return dispatch => {
    dispatch(postMessage());
    return axios.post(postMessageUrl, messageObj)
      .then(response => dispatch(
        postMessageSuccess(response.data))
      )
      .catch(error => dispatch(
        postMessageError(error.toString()))
      );
  };
}

export const postMessage = () => ({
  type: types.POST_MESSAGE
});

export const postMessageSuccess = payload => ({
  type: types.POST_MESSAGE_SUCCESS,
  payload
});

export const postMessageError = payload => ({
  type: types.POST_MESSAGE_ERROR,
  payload
});

