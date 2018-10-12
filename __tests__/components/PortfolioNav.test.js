import React from 'react';
import { shallow } from 'enzyme';
import PortfolioNav from '../../src/components/PortfolioNav';
import Button from '../../src/components/Button';

describe('Portfolio Nav', () => {
  const portfolionav = shallow(
    <PortfolioNav
      portfolioTypes={['online', 'print']}
      setSection={() => {}}
     />
  );
  test('renders the component', () => {
    expect(portfolionav.exists()).toBe(true);
  });
  test('renders buttons for each portfolio type', () => {
    expect(portfolionav.find(Button)).toHaveLength(2);
  });
});

describe('Portfolio Nav Button', () => {
  const payload = { primary: 'portfolio', secondary: 'online' };
  const mockOnClick = jest.fn(() => payload);
  const navbutton = shallow(
    <Button
      handleClick={mockOnClick}
      label={payload.secondary}
    />
  );
  test('renders the component', () => {
    expect(navbutton.exists()).toBe(true);
  });
  test('onClick returns expected payload', () => {
    navbutton.find('button').simulate('click');
    expect(mockOnClick.mock.results[0].value).toEqual(payload);
  });
});
