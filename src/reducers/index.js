import {
  SET_PORTFOLIO_TYPE,
  ADD_PORTFOLIO_TYPE,
  ADD_PORTFOLIO_ITEM,
  REMOVE_PORTFOLIO_ITEM
} from '../constants/action_types';

export default (state, action) => {
  switch (action.type) {
  case SET_PORTFOLIO_TYPE: {
    let { type } = action.payload;
    let portfolioType = Object.keys(state.portfolio);
    let inValidType = portfolioType.indexOf(type) == -1;
    if(inValidType) return state;
    return ({
      ...state,
      selected_portfolio_type: type
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
