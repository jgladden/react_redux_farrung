
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from 'actions';
import * as types from 'actions/types';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('auth actions', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const payload = true;
  const response = { isAuthenticated: payload };

  it('submitLogin dispatches correct actions and payload after fetching', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });

    const expectedActions = [
      { type: types.POST_AUTH },
      { type: types.POST_AUTH_SUCCESS, payload }
    ];

    return store.dispatch(actions.submitLogin())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })
});
