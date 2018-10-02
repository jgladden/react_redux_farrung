import { combineReducers } from 'redux';
import portfolio from './portfolio';
import portfolio_type from './portfolio_type';
import portfolio_id from './portfolio_id';

export default combineReducers({
  portfolio,
  portfolio_type,
  portfolio_id
});
