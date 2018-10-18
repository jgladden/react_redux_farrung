import * as types from '../actions/types';

const auth = (state = {}, action) => {
  switch (action.type) {
  case types.POST_AUTH: {
    return {
      posting: 1
    };
  }
  case types.POST_AUTH_SUCCESS: {
    return { 
      isAuthenticated: action.payload.isAuthenticated 
    };
  }
  case types.POST_AUTH_ERROR: {
    return { 
      error: action.payload
    };
  }
  case types.AUTH_LOGOUT: {
    return {};
  }
  default:
    return state;
  }
};

export default auth;
