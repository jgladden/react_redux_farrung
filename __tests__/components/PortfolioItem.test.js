import React from 'react';
import { shallow } from 'enzyme';
import PortfolioItem from '../../src/components/PortfolioItem';

describe('Portfolio Item', () => {
  const id = { id: '22'};
  const mockOnClick = jest.fn(() => id);
  const portfolioitem = shallow(
    <PortfolioItem
      handleClick={mockOnClick}
      title='title'
      description='description'
    />
  );
  test('renders the component', () => {
    expect(portfolioitem.exists()).toBe(true);
  });
  test('onClick returns expected payload', () => {
    portfolioitem.find('li').simulate('click');
    expect(mockOnClick.mock.results[0].value).toEqual(id);
  });
});
