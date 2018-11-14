
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from 'actions';
import * as types from 'actions/types';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('admin actions', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const payload = { print: {id: 11} };

  it('fetchAdmin dispatches correct actions and payload after fetching', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });

    const expectedActions = [
      { type: types.GET_ADMIN_ITEMS },
      { type: types.GET_ADMIN_ITEMS_SUCCESS, payload }
    ];

    return store.dispatch(actions.fetchAdmin())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })
});
