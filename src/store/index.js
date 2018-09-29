import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { uniqueId } from '../utils/uniqueId';

const initialState = {
  selected_portfolio_type: 'online',
  portfolio: {}
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
