import admin from 'reducers/admin';
import * as types from 'actions/types';

const initialState = {
  displayType: 'online',
  displayArchived: false
};

describe('dummy action returns intial state', () => {
  test('initial state is correct', () => {
    const action = { 
      type: 'dummy_action' 
    };
    expect(admin(initialState, action))
    .toEqual(initialState);
  });
  test('GET_ADMIN_ITEMS returns expected state', () => {
    const action = { 
      type: types.GET_ADMIN_ITEMS
    };
    expect(admin(initialState, action))
    .toEqual({
      ...initialState,
      fetching: true
    });
  });
  test('GET_ADMIN_ITEMS_SUCCESS returns expected state', () => {
    const payload = { 'id': '22' };
    const action = {
      type: types.GET_ADMIN_ITEMS_SUCCESS,
      payload 
    };
    expect(admin(initialState, action))
    .toEqual({
      ...initialState,
      fetching: false,
      success: true,
      error: null,
      items: {...payload}
    });
  });
  test('GET_ADMIN_ITEMS_ERROR returns expected state', () => {
    const payload = 'err msg';
    const action = {
      type: types.GET_ADMIN_ITEMS_ERROR,
      payload
    };
    expect(admin(initialState, action))
    .toEqual({
      ...initialState,
      fetching: false,
      success: false,
      error: payload
    });
  });
});
