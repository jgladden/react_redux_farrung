import * as types from '../actions/types';

const initialState = {
  urlParts: [],
  url: ''
};

const route = (state = initialState, action) => {
  switch (action.type) {
  case types.SET_ROUTE: {
    let url = action.payload;
    if(!url) return state;
    let urlParts = url.replace(/^\//, '').replace(/\/$/, '').split('/');
    if(!urlParts[1]) {
      if(urlParts[0] === 'portfolio')
        urlParts[1] = 'online';
      if(urlParts[0] === 'admin')
        urlParts[1] = 'list';
    }
    url = `/${urlParts.join('/')}`;
    return {  url, urlParts };
  }
  default:
    return state;
  }
};

export default route;
