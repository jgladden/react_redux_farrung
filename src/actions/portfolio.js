import axios from 'axios';
import * as types from './types';
import { portfolioRequestUri } from '../config';

export function fetchPortfolio() {
  return dispatch => {
    dispatch(fetchPortfolioRequest());
    return axios.get(portfolioRequestUri)
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

export const addPortfolioItem = payload => ({
  type: types.ADD_PORTFOLIO_ITEM,
  payload
});

export const removeTodo = payload => ({
  type: types.REMOVE_PORTFOLIO_ITEM,
  payload
});


