import { jsonFetch } from '../utils/jsonFetch';
import { 
  FETCH_PORTFOLIO,
  SET_PORTFOLIO_TYPE,
  SET_PORTFOLIO_ID,
  ADD_PORTFOLIO_ITEM, 
  REMOVE_PORTFOLIO_ITEM 
} from '../constants/action_types';

const api = 'http://farrung.com/api/allportfolio/';

export function fetchPortfolio() {
  return function(dispatch) {
    return jsonFetch(api).then(data => {
      dispatch(portfolioResults({portfolio: data}));
    });
  };
}

export const portfolioResults = payload => ({
  type: FETCH_PORTFOLIO,
  payload
});


export const setPortfolioType = payload => ({
  type: SET_PORTFOLIO_TYPE,
  payload
});

export const setPortfolioId = payload => ({
  type: SET_PORTFOLIO_ID,
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


