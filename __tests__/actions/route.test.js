import configureStore from 'redux-mock-store';
import * as actions from 'actions';
import * as types from 'actions/types';

const mockStore = configureStore();
const store = mockStore();

describe('section actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  
  test('setRoute dispatches correct action / payload', () => {
    const payload = '/portfolio/online/22';
    const expectedActions = [
      { 
        type: types.SET_ROUTE, 
        payload 
      }
    ];
    store.dispatch(actions.setRoute(payload));
    expect(store.getActions())
    .toEqual(expectedActions);
  });
});
