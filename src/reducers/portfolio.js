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

export const getDetailProps = state => {
  const items = state.portfolio.items;
  const type = state.route.urlParts[1];
  const id = state.route.urlParts[2];
  const allItems = items && items[type] ? items[type] : null;
  if(!allItems || !id)
    return {item: {}, prevId: '', nextId: ''};
  const arr = Object.keys(allItems);
  const len = arr.length;
  const pos = arr.indexOf(id);
  const p = pos === 0 ? len - 1 : pos - 1;
  const n = pos === len - 1 ? 0 : pos + 1;
  return {
    item: allItems[id],
    prevId: allItems[arr[p]].id,
    nextId: allItems[arr[n]].id
  };
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
