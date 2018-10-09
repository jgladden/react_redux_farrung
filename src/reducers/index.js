import { combineReducers } from 'redux';
import portfolio from './portfolio';
import display_portfolio from './display_portfolio';

export default combineReducers({
  portfolio,
  display_portfolio
});
