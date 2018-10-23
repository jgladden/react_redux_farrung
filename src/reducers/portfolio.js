import * as types from '../actions/types';

const portfolio = (state = {}, action) => {
  switch (action.type) {
  case types.FETCH_PORTFOLIO_REQUEST: {
    return {
      fetching: 1
    };
  }
  case types.FETCH_PORTFOLIO_SUCCESS: {
    return { 
      items: {
        ...action.payload 
      }
    };
  }
  case types.FETCH_PORTFOLIO_FAILURE: {
    return { 
      error: action.payload
    };
  }
  case types.ADD_PORTFOLIO_ITEM: {
    return {
      posting: 1
    };
  }
  case types.ADD_PORTFOLIO_ITEM_SUCCESS: {
    let { type, item } = action.payload;
    let portfolio = {...state};
    portfolio.items[type][item.id] = item;
    return {
      ...portfolio
    };
  }
  case types.ADD_PORTFOLIO_ITEM_ERROR: {
    return {
      error: action.payload
    };
  }
  case types.REMOVE_PORTFOLIO_ITEM: {
    let { type, id } = action.payload;
    let portfolio = {...state};
    delete portfolio.items[type][id];
    return {
      ...portfolio
    };
  }
  default:
    return state;
  }
};

export default portfolio;
