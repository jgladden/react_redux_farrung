import * as types from '../actions/types';

const auth = (state = {}, action) => {
  switch (action.type) {
  case types.AUTH_REQUEST: {
    return {
      fetching: 1
    };
  }
  case types.AUTH_SUCCESS: {
    return { 
      isAuthenticated: action.payload.isAuthenticated 
    };
  }
  case types.AUTH_FAILURE: {
    return { 
      error: action.payload
    };
  }
  default:
    return state;
  }
};

export default auth;
