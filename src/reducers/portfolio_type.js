import {
  SET_PORTFOLIO_TYPE
} from '../constants/action_types';

const portfolio_type = (state = 'online', action) => {
  switch (action.type) {
  case SET_PORTFOLIO_TYPE: {
    return action.payload.type;
  }
  default:
    return state;
  }
};

export default portfolio_type;
