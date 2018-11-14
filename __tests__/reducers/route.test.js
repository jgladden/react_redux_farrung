import route from 'reducers/route';
import * as types from 'actions/types';

const initialState = {
  urlParts: [],
  url: ''
};

describe('dummy action returns intial state', () => {
  test('initial state is correct', () => {
    const action = { 
      type: 'dummy_action' 
    };
    expect(route(initialState, action))
    .toEqual(initialState);
  });
  test('SET_ROUTE returns expected state', () => {
    const payload = '/portfolio/online/22';
    const action = { 
      type: types.SET_ROUTE,
      payload 
    };
    expect(route(initialState, action))
    .toEqual({
      url: payload,
      urlParts: [
        'portfolio',
        'online',
        '22'
      ]
    });
  });
});
