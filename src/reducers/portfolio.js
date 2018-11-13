import * as types from '../actions/types';

export const getPortfolioTypes = state => {
  const items = state.portfolio.items;
  return items ? Object.keys(items) : [];
};

export const getItemsByType = state => {
  const items = state.portfolio.items;
  const type = state.route.urlParts[1];
  return typeof items !== 'undefined' && items[type] ? items[type] : {};
};

export const getItemById = state => {
  const itemsByType = getItemsByType(state);
  const itemKeys = Object.keys(itemsByType);
  const len = itemKeys.length;
  const id = state.route.urlParts[2];
  if(!id || len === 0)
    return {item: {}, prevId: '', nextId: ''};
  const pos = itemKeys.indexOf(id);
  const p = pos === 0 ? len - 1 : pos - 1;
  const n = pos === len - 1 ? 0 : pos + 1;
  const item = itemsByType[id];
  item.prevId = itemsByType[itemKeys[p]].id;
  item.nextId = itemsByType[itemKeys[n]].id;
  return { item };
};

const portfolio = (state = {}, action) => {
  switch (action.type) {
  case types.GET_PORTFOLIO_ITEMS: {
    return {
      fetching: 1
    };
  }
  case types.GET_PORTFOLIO_ITEMS_SUCCESS: {
    return {
      items_loaded: 1,
      items: {
        ...action.payload 
      }
    };
  }
  case types.GET_PORTFOLIO_ITEMS_ERROR: {
    return { 
      error: action.payload
    };
  }
  default:
    return state;
  }
};

export default portfolio;
