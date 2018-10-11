import React from 'react';
import { shallow } from 'enzyme';
import PortfolioItem from '../../src/components/PortfolioItem';

const props = {
  title: 'title',
  description: 'description',
  handleClick: id => id
}

describe('Portfolio Item', () => {
  const portfolioitem = shallow(<PortfolioItem {...props} />);
  test('renders the component', () => {
    expect(portfolioitem.exists()).toBe(true);
  });
  test('onClick returns expected payload', () => {
    const id = { id: '22'};
    const func = () => props.handleClick(id);
    const mockOnClick = jest.fn(func);
    portfolioitem.setProps({handleClick: mockOnClick});
    portfolioitem.find('li').simulate('click');
    expect(mockOnClick.mock.results[0].value).toEqual(id);
  });
});
