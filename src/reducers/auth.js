import * as types from 'actions/types';
import { 
  parseJwt,
  getAuthTokenCookie
} from 'utils/authUtil';

let token = getAuthTokenCookie();
let username = token ? parseJwt(token).username : '';
let initialState = { username };

const auth = (state = initialState, action) => {
  switch (action.type) {
  case types.POST_AUTH: {
    return {
      posting: true
    };
  }
  case types.POST_AUTH_SUCCESS: {
    const {
      username
    } = action.payload;
    return { 
      username
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
