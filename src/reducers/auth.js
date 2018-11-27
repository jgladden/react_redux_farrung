import * as types from '../actions/types';
import cookieUtil from '../utils/cookieUtil';

let token = cookieUtil.getCookie('AUTHTOKEN') || '';
let initialState = { token };

const setCookie = token => {
  const exp = new Date(+new Date + 1.44e+7);
  cookieUtil.setCookie(
    'AUTHTOKEN',
    token, 
    exp,
    '/',
    '.farrung.com', 
    true
  );
};

const deleteCookie = () => {
  cookieUtil.deleteCookie(
    'AUTHTOKEN', 
    '/', 
    '.farrung.com'
  );
};

const auth = (state = initialState, action) => {
  switch (action.type) {
  case types.POST_AUTH: {
    return {
      token: '',
      posting: true
    };
  }
  case types.POST_AUTH_SUCCESS: {
    const token = action.payload;
    setCookie(token);
    return { token };
  }
  case types.POST_AUTH_ERROR: {
    return { 
      token: '',
      error: action.payload
    };
  }
  case types.AUTH_LOGOUT: {
    deleteCookie();
    return {
      token: ''
    };
  }
  default:
    return state;
  }
};

export default auth;
