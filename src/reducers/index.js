import { combineReducers } from 'redux';
import auth from './auth';
import section from './section';
import portfolio from './portfolio';
import admin from './admin';
import message from './message';

export default combineReducers({
  auth,
  section,
  portfolio,
  admin,
  message
});
