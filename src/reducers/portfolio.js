import * as types from '../actions/types';

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
  case types.MERGE_PORTFOLIO_ITEM: {
    let { values } = action.payload;
    let { id, type } = values;
    let portfolio = {...state};
    portfolio.items[type][id] = values;
    return {
      items: {
        ...portfolio.items
      }
    }
  }
  case types.REMOVE_PORTFOLIO_ITEM: {
    let { id, type } = action.payload;
    let portfolio = {...state};
    delete portfolio.items[type][id];
    console.log(portfolio.items);
    return {
      items: {
        ...portfolio.items
      }
    };
  }
  default:
    return state;
  }
};

export default portfolio;
