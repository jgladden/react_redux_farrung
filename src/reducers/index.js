import {
  SET_PORTFOLIO_TYPE,
  ADD_PORTFOLIO_TYPE,
  ADD_PORTFOLIO_ITEM,
  REMOVE_PORTFOLIO_ITEM
} from '../constants/action_types';

export default (state, action) => {
  switch (action.type) {
  case SET_PORTFOLIO_TYPE: {
    return ({
      ...state,
      selected_portfolio_type: action.payload.type
    });
  }
  case ADD_PORTFOLIO_TYPE: {
    return ({
      ...state,
      portfolio: {
        ...action.payload
      }
    });
  }
  case ADD_PORTFOLIO_ITEM: {
    let { type, item } = action.payload;
    let portfolio = {...state.portfolio};
    portfolio[type][item.id] = item;
    return {
      ...state,
      portfolio: {
        ...portfolio
      }
    };
  }
  case REMOVE_PORTFOLIO_ITEM: {
    let { type, id } = action.payload;
    let portfolio = {...state.portfolio};
    delete portfolio[type][id];
    return {
      ...state,
      portfolio: {
        ...portfolio
      }
    };
  }
  default:
    return state;
  }
};
