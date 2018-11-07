import { combineReducers } from 'redux';
import auth from './auth';
import route from './route';
import portfolio, * as fromPortfolio from './portfolio';
import admin from './admin';

export const getPortfolioTypes = state => 
  fromPortfolio.getPortfolioTypes(state);

export const getItemsByType = state => 
  fromPortfolio.getItemsByType(state);

export const getDetailProps = state => 
  fromPortfolio.getDetailProps(state);

export default combineReducers({
  auth,
  route,
  portfolio,
  admin
});
