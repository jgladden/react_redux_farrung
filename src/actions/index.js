import { jsonFetch } from '../utils/jsonFetch';
import { 
  ADD_PORTFOLIO_TYPE,
  SET_PORTFOLIO_TYPE,
  ADD_PORTFOLIO_ITEM, 
  REMOVE_PORTFOLIO_ITEM 
} from '../constants/action_types';

const api = 'http://farrung.com/api/allportfolio/';

export function fetchPortfolio() {
  return function(dispatch) {
    return jsonFetch(api).then(data => {
      dispatch(addPortfolioType(data));
    });
  };
}

export const addPortfolioType = payload => ({
  type: ADD_PORTFOLIO_TYPE,
  payload
});


export const setPortfolioType = payload => ({
  type: SET_PORTFOLIO_TYPE,
  payload
});

export const addPortfolioItem = payload => ({
  type: ADD_PORTFOLIO_ITEM,
  payload
});

export const removeTodo = payload => ({
  type: REMOVE_PORTFOLIO_ITEM,
  payload
});


