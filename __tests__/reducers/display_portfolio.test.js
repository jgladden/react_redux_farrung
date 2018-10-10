import display_portfolio, { initialState } from '../../src/reducers/display_portfolio';
import { SET_PORTFOLIO_TYPE, SET_PORTFOLIO_ID } from '../../src/actions/types';

describe('display portfolio reducer', () => {
  test('initial state is correct', () => {
    const action = { type: '' };
    expect(display_portfolio(undefined, action)).toMatchSnapshot();
  });
  test('SET_PORTFOLIO_TYPE returns expected state', () => {
    const action = { type: SET_PORTFOLIO_TYPE, payload: { type: 'print' } };
    expect(display_portfolio(undefined, action)).toMatchSnapshot();
  });
  test('SET_PORTFOLIO_ID returns expected state', () => {
    const action = { type: SET_PORTFOLIO_ID, payload: { id:  22 } };
    expect(display_portfolio(undefined, action)).toMatchSnapshot();
  });

});
