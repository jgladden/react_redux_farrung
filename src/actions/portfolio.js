import axios from 'axios';
import * as types from './types';
import { 
  getPortfolioUrl,
  editPortfolioItemUrl,
  addPortfolioItemUrl 
} from '../config';

export function fetchPortfolioItems() {
  return dispatch => {
    dispatch(getPortfolioItems());
    return axios.get(getPortfolioUrl)
      .then(response => dispatch(
        getPortfolioItemsSuccess(response.data))
      )
      .catch(error => dispatch(
        getPortfolioItemsError(error.toString()))
      );
  };
}

export const getPortfolioItems = () => ({
  type: types.GET_PORTFOLIO_ITEMS
});

export const getPortfolioItemsSuccess = payload => ({
  type: types.GET_PORTFOLIO_ITEMS_SUCCESS,
  payload
});

export const getPortfolioItemsError = payload => ({
  type: types.GET_PORTFOLIO_ITEMS_ERROR,
  payload
});

export function editPortfolioItem(item) {
  let id = item.id;
  return dispatch => {
    dispatch(editPortfolioItemInit({id}));
    return axios.post(editPortfolioItemUrl, item)
      .then(response => {
        let error = response.data.error;
        if(!error) {
          dispatch(editPortfolioItemSuccess({item}))
        } else {
          dispatch(editPortfolioItemError({id,error}))
        }
      })
      .catch(error => dispatch(
        editPortfolioItemError({id, error: error.toString()})
      ));
  };
};

export const editPortfolioItemInit = payload => ({
  type: types.EDIT_PORTFOLIO_ITEM,
  payload
});

export const editPortfolioItemSuccess = payload => ({
  type: types.EDIT_PORTFOLIO_ITEM_SUCCESS,
  payload
});

export const editPortfolioItemError = payload => ({
  type: types.EDIT_PORTFOLIO_ITEM_ERROR,
  payload
});

