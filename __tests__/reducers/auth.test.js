import auth from 'reducers/auth';
import * as types from 'actions/types';

describe('dummy action returns initial state', () => {
  test('initial state is correct', () => {
    const action = { 
      type: 'dummy_action' 
    };
    expect(auth({}, action))
    .toEqual({});
  });
  test('POST_AUTH returns expected state', () => {
    const action = { 
      type: types.POST_AUTH
    };
    expect(auth({}, action))
    .toEqual({
      posting: true
    });
  });
  test('POST_AUTH_SUCCESS returns expected state', () => {
    const payload = true;
    const action = {
      type: types.POST_AUTH_SUCCESS,
      payload 
    };
    expect(auth({}, action))
    .toEqual({
      isAuthenticated: payload
    });
  });
  test('POST_AUTH_ERROR returns expected state', () => {
    const payload = 'error msg';
    const action = {
      type: types.POST_AUTH_ERROR,
      payload
    };
    expect(auth({}, action))
    .toEqual({
      error: payload
    });
  });
  test('AUTH_LOGOUT returns expected state', () => {
    const action = {
      type: types.AUTH_LOGOUT
    };
    expect(auth({}, action))
    .toEqual({});
  });
});
