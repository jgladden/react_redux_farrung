import axios from 'axios';
import * as types from './types';
import { getPortfolioUrl, addPortfolioItemUrl } from '../config';

export function fetchPortfolio() {
  return dispatch => {
    dispatch(fetchPortfolioRequest());
    return axios.get(getPortfolioUrl)
      .then(response => dispatch(
        fetchPortfolioSuccess(response.data))
      )
      .catch(error => dispatch(
        fetchPortfolioFailure(error.toString()))
      );
  };
}

export const fetchPortfolioRequest = () => ({
  type: types.FETCH_PORTFOLIO_REQUEST
});

export const fetchPortfolioSuccess = payload => ({
  type: types.FETCH_PORTFOLIO_SUCCESS,
  payload
});

export const fetchPortfolioFailure = payload => ({
  type: types.FETCH_PORTFOLIO_FAILURE,
  payload
});

export const submitAddPortfolioItem = portfolioItemObj => {
  return dispatch => {
    dispatch(addPortfolioItem());
    return axios.post(addPortfolioItemUrl, portfolioItemObj)
      .then(response => dispatch(
        addPortfolioItemSuccess({...response.data, item: portfolioItemObj}))
      )
      .catch(error => dispatch(
        addPortfolioItemError(error.toString()))
      );
  };
};

export const addPortfolioItem = () => ({
  type: types.ADD_PORTFOLIO_ITEM
});

export const addPortfolioItemSuccess = payload => ({
  type: types.ADD_PORTFOLIO_ITEM_SUCCESS,
  payload
});

export const addPortfolioItemError = payload => ({
  type: types.ADD_PORTFOLIO_ITEM_ERROR,
  payload
});

export const submitEditPortfolioItem = () => {
  return dispatch => {
    dispatch(editPortfolioItem());
    return axios.get(getEditPortfolioUrl)
      .then(response => dispatch(
        editPortfolioItemSuccess(response.data))
      )
      .catch(error => dispatch(
        editPortfolioItemError(error.toString()))
      );
  };
};

export const editPortfolioItem = () => ({
  type: types.EDIT_PORTFOLIO_ITEM
});

export const editPortfolioItemSuccess = payload => ({
  type: types.EDIT_PORTFOLIO_ITEM_SUCCESS,
  payload
});

export const editPortfolioItemError = payload => ({
  type: types.EDIT_PORTFOLIO_ITEM_ERROR,
  payload
});



