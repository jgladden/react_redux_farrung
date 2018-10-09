import 'whatwg-fetch';
import * as types from './types';
import { api } from '../config';

export function fetchPortfolio() {
  return dispatch => {
    dispatch(fetchPortfolioRequest());
    return fetch(api)
      .then(res => res.json())
      .then(body => dispatch(fetchPortfolioSuccess(body)))
      .catch(ex => dispatch(fetchPortfolioFailure(ex)));
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

export const setPortfolioType = payload => ({
  type: types.SET_PORTFOLIO_TYPE,
  payload
});

export const setPortfolioId = payload => ({
  type: types.SET_PORTFOLIO_ID,
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


