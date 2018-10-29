import axios from 'axios';
import * as types from './types';
import { 
  getPortfolioUrl 
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


export const mergePortfolioItem = payload => ({
  type: types.MERGE_PORTFOLIO_ITEM,
  payload
});

export const removePortfolioItem = payload => ({
  type: types.REMOVE_PORTFOLIO_ITEM,
  payload
});

