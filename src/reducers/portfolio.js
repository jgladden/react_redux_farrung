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
  default:
    return state;
  }
};

export default portfolio;
