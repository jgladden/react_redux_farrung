import React from 'react';
import { shallow } from 'enzyme';
import PortfolioItem from '../../src/components/PortfolioItem';

const props = {
  title: 'title',
  description: 'description',
};

describe('Portfolio Item', () => {
  const id = { id: '22'};
  const func = () => id;
  const mockOnClick = jest.fn(func);
  props.handleClick: mockOnClick;
  const portfolioitem = shallow(<PortfolioItem {...props} />);
  test('renders the component', () => {
    expect(portfolioitem.exists()).toBe(true);
  });
  test('onClick returns expected payload', () => {
    portfolioitem.find('li').simulate('click');
    expect(mockOnClick.mock.results[0].value).toEqual(id);
  });
});
