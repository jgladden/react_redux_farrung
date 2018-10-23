import * as types from '../actions/types';
import cookieUtil from '../utils/cookieUtil';

let initialState = {};
if(cookieUtil.getCookie('AUTH') === 'isAuthenticated')
  initialState = { isAuthenticated: true };

const auth = (state = initialState, action) => {
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
