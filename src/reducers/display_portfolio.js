import * as types from '../actions/types';

const initialState = {
  type: 'online',
  id: null
}
const display_portfolio = (state = initialState, action) => {
  switch (action.type) {
  case types.SET_PORTFOLIO_TYPE: {
    let {
      type
    } = action.payload;
    if(type !== state.type)
      return { type, id: null }
  }
  case types.SET_PORTFOLIO_ID: {
    return {
      ...state,
      id: action.payload.id 
    }
  }
  default:
    return state;
  }
};

export default display_portfolio;
