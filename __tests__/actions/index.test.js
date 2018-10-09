
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions';
import * as types from '../../src/actions/types';
import fetchMock from 'fetch-mock';
import { api } from '../../src/config';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('async actions', () => {
  beforeEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  const payload = { print: {id: 11} };
  it('fetchPortfolio dispatches correct actions and payload after fetching', () => {
    fetchMock.getOnce(api, payload);
    const expectedActions = [
      { type: types.FETCH_PORTFOLIO_REQUEST },
      { type: types.FETCH_PORTFOLIO_SUCCESS, payload }
    ];
    return store.dispatch(actions.fetchPortfolio())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })
});

describe('event actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  
  test('setportfoliotype dispatches correct action / payload', () => {
    const payload = { type: 'online' };
    const expectedActions = [
      { type: types.SET_PORTFOLIO_TYPE, payload }
    ];
    store.dispatch(actions.setPortfolioType(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('setportfolioid dispatches correct action / payload', () => {
    const payload = { id: 22 };
    const expectedActions = [
      { type: types.SET_PORTFOLIO_ID, payload }        
    ];
    store.dispatch(actions.setPortfolioId(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
