import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const initialState = {
  selected_portfolio_type: 'online',
  portfolio: {}
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));

