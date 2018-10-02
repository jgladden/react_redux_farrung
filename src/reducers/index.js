import {
  FETCH_PORTFOLIO,
  SET_PORTFOLIO_ID,
  SET_PORTFOLIO_TYPE,
  ADD_PORTFOLIO_ITEM,
  REMOVE_PORTFOLIO_ITEM
} from '../constants/action_types';

export default (state, action) => {
  switch (action.type) {
  case SET_PORTFOLIO_TYPE: {
    return ({
      ...state,
      portfolio_type: action.payload.type
    });
  }
  case SET_PORTFOLIO_ID: {
    return({
      ...state,
      portfolio_id: action.payload.id
    })
  }
  case FETCH_PORTFOLIO: {
    let {
      portfolio
    } = action.payload;
    return ({
      ...state,
      portfolio
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
