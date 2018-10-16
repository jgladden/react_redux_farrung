import fetchIt from '../utils/fetchIt';
import * as types from './types';
import { portfolioRequestUri, authRequestUri } from '../config';

export function submitAuthRequest(credentials) {
  return dispatch => {
    dispatch(authRequest());
    return fetchIt(authRequestUri, {
      method: 'POST',
      body: credentials
    })
      .then(body => dispatch(authSuccess(body)))
      .catch(ex => { console.log(ex); return dispatch(authFailure(ex))});
  };
}

export const authRequest = () => ({
  type: types.AUTH_REQUEST
});

export const authSuccess = payload => ({
  type: types.AUTH_SUCCESS,
  payload
});

export const authFailure = payload => ({
  type: types.AUTH_FAILURE,
  payload
});




export const setSection = payload => ({
  type: types.SET_SECTION,
  payload
});

export function fetchPortfolio() {
  return dispatch => {
    dispatch(fetchPortfolioRequest());
    return fetchIt(portfolioRequestUri)
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

export const addPortfolioItem = payload => ({
  type: types.ADD_PORTFOLIO_ITEM,
  payload
});

export const removeTodo = payload => ({
  type: types.REMOVE_PORTFOLIO_ITEM,
  payload
});


