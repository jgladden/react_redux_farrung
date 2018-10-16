import { combineReducers } from 'redux';
import auth from './auth';
import section from './section';
import portfolio from './portfolio';

export default combineReducers({
  auth,
  section,
  portfolio
});
