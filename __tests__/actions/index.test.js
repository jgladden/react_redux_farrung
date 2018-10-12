
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
  
  test('setsection dispatches correct action / payload', () => {
    const payload = { primary: 'portfolio', secondary: 'online', tertiary: '22' };
    const expectedActions = [
      { type: types.SET_SECTION, payload }
    ];
    store.dispatch(actions.setSection(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
