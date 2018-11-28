import * as types from '../actions/types';
import { createSelector } from 'reselect';

const items = state => state.portfolio.items;
const type = state => state.route.urlParts[1];
const id = state => state.route.urlParts[2];

export const getPortfolioTypes = createSelector(
  [items],
  (items) => {
    return items ? Object.keys(items) : [];
  }
);

export const getItemsByType = createSelector(
  [items, type],
  (items, type) => {
    return typeof items !== 'undefined' && items[type] ? items[type] : {};
  }
);

export const getItemById = createSelector(
  [getItemsByType, id],
  (itemsByType, id) => {
    const itemKeys = Object.keys(itemsByType);
    const len = itemKeys.length;
    if(!id || len === 0)
      return {item: {}, prevId: '', nextId: ''};
    const pos = itemKeys.indexOf(id);
    const p = pos === 0 ? len - 1 : pos - 1;
    const n = pos === len - 1 ? 0 : pos + 1;
    const item = itemsByType[id];
    item.prevId = itemsByType[itemKeys[p]].id;
    item.nextId = itemsByType[itemKeys[n]].id;
    return { item };
  }
);

const portfolio = (state = {}, action) => {
  switch (action.type) {
  case types.GET_PORTFOLIO_ITEMS: {
    return {
      fetching: true,
      success: false,
      error: null
    };
  }
  case types.GET_PORTFOLIO_ITEMS_SUCCESS: {
    return {
      success: true,
      fetching: false,
      error: null,
      items: {
        ...action.payload 
      }
    };
  }
  case types.GET_PORTFOLIO_ITEMS_ERROR: {
    return { 
      fetching: false,
      success: false,
      error: action.payload
    };
  }
  default:
    return state;
  }
};

export default portfolio;
