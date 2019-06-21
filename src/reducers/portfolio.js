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
    return items && items[type] ? items[type] : {};
  }
);

export const getSortedItems = createSelector(
  [getItemsByType],
  (itemsByType) => {
    return Object.keys(itemsByType)
    .map(key => itemsByType[key])
    .sort((a,b) => parseInt(b.rating) - parseInt(a.rating));
  }
);

export const getItemById = createSelector(
  [getSortedItems, id],
  (items, id) => {
    const itemsLength = items.length;
    let itemIndex = null;
    const item = items.filter((item, idx) => {
      if(item.id === id) {
        itemIndex = idx;
        return item;
      }
    })[0];
    if(!item) return {};
    const p = itemIndex === 0 ? itemsLength - 1 : itemIndex - 1;
    const n = itemIndex === itemsLength - 1 ? 0 : itemIndex + 1;
    item.prevId = items[p].id;
    item.nextId = items[n].id;
    return item;
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
