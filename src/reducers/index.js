import {
  SET_PORTFOLIO_TYPE,
  ADD_PORTFOLIO_TYPE,
  ADD_PORTFOLIO_ITEM,
  REMOVE_PORTFOLIO_ITEM
} from '../constants/action_types';

export default (state, action) => {
  switch (action.type) {
    case SET_PORTFOLIO_TYPE:
      return ({
        ...state,
        selected_portfolio_type: action.payload.type
      });
    case ADD_PORTFOLIO_TYPE:
      return ({
        ...state,
        portfolio: {
          ...state.portfolio,
          [state.selected_portfolio_type]: {
          ...action.payload
          }
        }
      });
    case ADD_PORTFOLIO_ITEM:
      return ({
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          ...action.payload.item
        }
      });
    case REMOVE_PORTFOLIO_ITEM:
      const portfolioItemsByType = {...state[action.payload.type]};
      delete portfolioItemsByType[action.payload.id];
      return {
        ...state,
        [action.payload.type]: {
          ...portfolioItemsByType
        }
      };
    default:
      return state;
  }
}
