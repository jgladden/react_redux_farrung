import axios from 'axios';
import * as types from './types';
import { 
  getPortfolioUrl, 
  addPortfolioItemUrl, 
  editPortfolioItemUrl,
  removePortfolioItemUrl 
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


export const submitAddPortfolioItem = portfolioItemObj => {
  return dispatch => {
    dispatch(addPortfolioItem());
    return axios.post(addPortfolioItemUrl, portfolioItemObj)
      .then(response => dispatch(
        addPortfolioItemSuccess({
          response,
          item: {...portfolioItemObj}
        })
      ))
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


export const submitEditPortfolioItem = portfolioItemObj => {
  return dispatch => {
    dispatch(editPortfolioItem());
    return axios.post(editPortfolioItemUrl, portfolioItemObj)
      .then(response => dispatch(
        editPortfolioItemSuccess({
          response,
          item: {...portfolioItemObj}
        }) 
      ))
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


export const submitRemovePortfolioItem = (id, type) => {
  return dispatch => {
    dispatch(removePortfolioItem());
    return axios.post(removePortfolioItemUrl, id)
      .then(response => dispatch(
        removePortfolioItemSuccess({ response, id, type })
      ))
      .catch(error => dispatch(
        removePortfolioItemError(error.toString()))
      );
  };
};

export const removePortfolioItem = () => ({
  type: types.REMOVE_PORTFOLIO_ITEM
});

export const removePortfolioItemSuccess = payload => ({
  type: types.REMOVE_PORTFOLIO_ITEM_SUCCESS,
  payload
});

export const removePortfolioItemError = payload => ({
  type: types.REMOVE_PORTFOLIO_ITEM_ERROR,
  payload
});

