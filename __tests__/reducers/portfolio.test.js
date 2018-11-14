import portfolio from 'reducers/portfolio';
import * as types from 'actions/types';

const initialState = {};

describe('test portfolio reducer', () => {
  test('initial state is correct', () => {
    const action = { 
      type: 'dummy_action' 
    };
    expect(portfolio({}, action))
    .toEqual(initialState);
  });
  test('GET_PORTFOLIO_ITEMS returns expected state', () => {
    const action = { 
      type: types.GET_PORTFOLIO_ITEMS 
    };
    expect(portfolio(undefined, action))
    .toEqual({
      fetching: true,
      success: false,
      error: null
    });
  });
  test('GET_PORTFOLIO_ITEMS_SUCCESS returns expected state', () => {
    const payload = { 'id': '22' };
    const action = { 
      type: types.GET_PORTFOLIO_ITEMS_SUCCESS, 
      payload
    };
    expect(portfolio({}, action))
    .toEqual({
      success: true,
      fetching: false,
      error: null,
      items: {...payload}
    });
  });
  test('GET_PORTFOLIO_ITEMS_ERROR returns expected state', () => {
    const payload = Error('msg');
    const action = { 
      type: types.GET_PORTFOLIO_ITEMS_ERROR, 
      payload
    };
    expect(portfolio({}, action))
    .toEqual({
      success: false,
      fetching: false,
      error: payload
    });
  });
});
