import { combineReducers } from 'redux';
import portfolio from './portfolio';
import section from './section';

export default combineReducers({
  section,
  portfolio
});
