
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from 'actions';
import * as types from 'actions/types';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('portfolio actions', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const payload = { print: {id: 11} };

  it('fetchPortfolio dispatches correct actions and payload after fetching', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });

    const expectedActions = [
      { type: types.GET_PORTFOLIO_ITEMS },
      { type: types.GET_PORTFOLIO_ITEMS_SUCCESS, payload }
    ];

    return store.dispatch(actions.fetchPortfolio())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })
});
