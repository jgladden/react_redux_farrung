import {
  FETCH_PORTFOLIO,
  ADD_PORTFOLIO_ITEM,
  REMOVE_PORTFOLIO_ITEM
} from '../constants/action_types';

const portfolio = (state = {}, action) => {
  switch (action.type) {
  case FETCH_PORTFOLIO: {
    return ({
      ...action.payload.portfolio
    });
  }
  case ADD_PORTFOLIO_ITEM: {
    let { type, item } = action.payload;
    let portfolio = {...state};
    portfolio[type][item.id] = item;
    return {
      ...portfolio
    };
  }
  case REMOVE_PORTFOLIO_ITEM: {
    let { type, id } = action.payload;
    let portfolio = {...state};
    delete portfolio[type][id];
    return {
      ...portfolio
    };
  }
  default:
    return state;
  }
};

export default portfolio;
