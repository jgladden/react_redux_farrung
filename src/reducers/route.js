import * as types from '../actions/types';

const initialState = {
  urlParts: [],
  url: ''
};

const route = (state = initialState, action) => {
  switch (action.type) {
  case types.SET_ROUTE: {
    if(!action.payload) return state;
    return {...state, ...action.payload};
  }
  default:
    return state;
  }
};

export default route;
