import cookieUtil from 'utils/cookieUtil';

export const getJwtHeader = () => {
  let token = cookieUtil.getCookie('AUTHTOKEN') || '';
  return {
    headers: {
      'Authorization': `bearer ${token}`
    }
  };
};

export const parseJwt = token => {
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
};

export const getAuthTokenCookie = () => {
  return cookieUtil.getCookie('AUTHTOKEN') || '';
};

export const setAuthTokenCookie = token => {
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

export const deleteAuthTokenCookie = () => {
  cookieUtil.deleteCookie(
    'AUTHTOKEN',
    '/',
    '.farrung.com'
  );
};
