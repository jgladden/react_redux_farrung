import {
  SET_PORTFOLIO_ID
} from '../constants/action_types';

const portfolio_id = (state = null, action) => {
  switch (action.type) {
  case SET_PORTFOLIO_ID: {
    return action.payload.id;
  }
  default:
    return state;
  }
};

export default portfolio_id;
