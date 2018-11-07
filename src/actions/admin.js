import axios from 'axios';
import * as types from './types';
import { getAdminUrl } from 'config';

export function fetchAdmin() {
  return dispatch => {
    dispatch(getAdminItems());
    return axios.get(getAdminUrl)
      .then(response => dispatch(
        getAdminItemsSuccess(response.data))
      )
      .catch(error => dispatch(
        getAdminItemsError(error.toString()))
      );
  };
}

export const getAdminItems = () => ({
  type: types.GET_ADMIN_ITEMS
});

export const getAdminItemsSuccess = payload => ({
  type: types.GET_ADMIN_ITEMS_SUCCESS,
  payload
});

export const getAdminItemsError = payload => ({
  type: types.GET_ADMIN_ITEMS_ERROR,
  payload
});

export const mergeAdminItem = payload => ({
  type: types.MERGE_ADMIN_ITEM,
  payload
});

export const removeAdminItem = payload => ({
  type: types.REMOVE_ADMIN_ITEM,
  payload
});