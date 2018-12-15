import * as types from './types';

const processRoute = url => {
  if(!url) return null;
  let urlParts = url.replace(/^\//, '').replace(/\/$/, '').split('/');
  if(!urlParts[1]) {
    if(urlParts[0] === 'portfolio')
      urlParts[1] = 'online';
    if(urlParts[0] === 'admin')
      urlParts[1] = 'list';
  }
  url = `/${urlParts.join('/')}`;
  return {  url, urlParts };
};


export const setRoute = url => {
  let payload = processRoute(url);
  return {
    type: types.SET_ROUTE,
    payload
  };
};

