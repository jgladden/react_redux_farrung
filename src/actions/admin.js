import axios from 'axios';
import * as types from 'actions/types';
import { getAdminUrl } from 'config';
import { getJwtHeader } from 'utils/authUtil';

export function fetchAdmin() {
  return dispatch => {
    dispatch(getAdminItems());
    return axios.get(getAdminUrl, getJwtHeader())
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

export const setDisplayType = payload => ({
  type: types.SET_DISPLAY_TYPE,
  payload
});

export const setDisplayArchived = payload => ({
  type: types.SET_DISPLAY_ARCHIVED,
  payload
});

export const setSortBy = payload => ({
  type: types.SET_SORT_BY,
  payload
});

export const setPage = payload => ({
  type: types.SET_PAGE,
  payload
});

export const setItemsPerPage = payload => ({
  type: types.SET_ITEMS_PER_PAGE,
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
