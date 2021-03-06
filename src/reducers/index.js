import { combineReducers } from 'redux';
import auth from './auth';
import route from './route';
import portfolio, * as fromPortfolio from './portfolio';
import admin, * as fromAdmin from './admin';

export const getPortfolioTypes = state => 
  fromPortfolio.getPortfolioTypes(state);

export const getSortedItems = state => 
  fromPortfolio.getSortedItems(state);

export const getItemById = state => 
  fromPortfolio.getItemById(state);

export const getFilteredAdminItems = state =>
  fromAdmin.getFilteredAdminItems(state);

export const getPageSelectOptions = state =>
  fromAdmin.getPageSelectOptions(state);

export default combineReducers({
  auth,
  route,
  portfolio,
  admin
});
