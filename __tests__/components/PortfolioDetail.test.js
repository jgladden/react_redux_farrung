import React from 'react';
import { shallow } from 'enzyme';
import PortfolioDetail from '../../src/components/PortfolioDetail';

const props = {
  portfolioDetails: { 
    id: '22', 
    title: 'title' 
  }
};

describe('Portfolio Detail', () => {
  const portfoliodetail = shallow(<PortfolioDetail {...props} />);
  test('renders the component', () => {
    expect(portfoliodetail.exists()).toBe(true);
  });
});
