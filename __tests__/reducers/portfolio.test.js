import portfolio from '../../src/reducers/portfolio';
import * as types from '../../src/actions/types';

describe('1display portfolio reducer', () => {
  test('initial state is correct', () => {
    const action = { type: '' };
    expect(portfolio(undefined, action)).toMatchSnapshot();
  });
  test('FETCH_PORTFOLIO_REQUEST returns expected state', () => {
    const action = { type: types.FETCH_PORTFOLIO_REQUEST };
    expect(portfolio(undefined, action)).toMatchSnapshot();
  });
  test('FETCH_PORTFOLIO_SUCCESS returns expected state', () => {
    const action = { type: types.FETCH_PORTFOLIO_SUCCESS, payload: { data: 1 } };
    expect(portfolio(undefined, action)).toMatchSnapshot();
  });
  test('FETCH_PORTFOLIO_FAILURE returns expected state', () => {
    const action = { type: types.FETCH_PORTFOLIO_FAILURE, payload: Error('msg') };
    expect(portfolio(undefined, action)).toMatchSnapshot();
  });
});
