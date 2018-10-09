import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import PortfolioNav from '../../src/components/PortfolioNav';
import Button from '../../src/components/button';

const props = {
  portfolioTypes: ['online', 'print'],
  setPortfolioType: type => type
}

describe('Portfolio Nav', () => {
  const portfolionav = mount(<PortfolioNav {...props} />);
  test('renders the component', () => {
    expect(portfolionav.exists()).toBe(true);
  });
  test('renders buttons for each portfolio type', () => {
    expect(portfolionav.find('button')).toHaveLength(2);
  });
});

describe('Portfolio Nav Button', () => {
  const type = props.portfolioTypes[0];
  const func = () => props.setPortfolioType({type});
  const mockOnClick = jest.fn(func);
  const navbutton = mount(
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
