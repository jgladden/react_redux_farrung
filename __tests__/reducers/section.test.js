import section from '../../src/reducers/section';
import { SET_SECTION } from '../../src/actions/types';

describe('section reducers', () => {
  test('initial state is correct', () => {
    const action = { type: '' };
    expect(section(undefined, action)).toEqual({});
  });
  test('set section primary returns expected state', () => {
    const action = { type: SET_SECTION, payload: { primary: 'portfolio' } };
    expect(section(undefined, action)).toMatchSnapshot();
  });
  test('set section secondary returns expected state', () => {
    const action = { type: SET_SECTION, payload: { primary: 'portfolio', secondary: 'print' } };
    expect(section(undefined, action)).toMatchSnapshot();
  });
  test('set section tertiary returns expected state', () => {
    const action = { type: SET_SECTION, payload: { primary: 'portfolio', secondary: 'print', tertiary: '22' } };
    expect(section(undefined, action)).toMatchSnapshot();
  });
});
