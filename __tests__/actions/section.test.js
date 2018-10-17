
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions';
import * as types from '../../src/actions/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('section actions', () => {
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
