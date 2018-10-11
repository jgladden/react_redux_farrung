import React from 'react';
import { shallow } from 'enzyme';
import PortfolioNav from '../../src/components/PortfolioNav';
import Button from '../../src/components/Button';

const props = {
  portfolioTypes: ['online', 'print'],
  setPortfolioType: type => type
}

describe('Portfolio Nav', () => {
  const portfolionav = shallow(<PortfolioNav {...props} />);
  test('renders the component', () => {
    expect(portfolionav.exists()).toBe(true);
  });
  test('renders buttons for each portfolio type', () => {
    expect(portfolionav.find(Button)).toHaveLength(2);
  });
});

describe('Portfolio Nav Button', () => {
  const type = props.portfolioTypes[0];
  const func = () => props.setPortfolioType({type});
  const mockOnClick = jest.fn(func);
  const navbutton = shallow(
    <Button
      handleClick={mockOnClick}
      label={type}
    />
  );
  test('renders the component', () => {
    expect(navbutton.exists()).toBe(true);
  });
  test('onClick returns expected payload', () => {
    navbutton.find('button').simulate('click');
    expect(mockOnClick.mock.results[0].value).toEqual({type});
  });
});
