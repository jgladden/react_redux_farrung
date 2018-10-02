import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const initialState = {
  portfolio_type: 'online',
  portfolio: {}
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));

