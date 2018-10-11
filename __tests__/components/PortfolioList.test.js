import React from 'react';
import { shallow } from 'enzyme';
import PortfolioList from '../../src/components/PortfolioList';
import PortfolioItem from '../../src/components/PortfolioItem';
import Loading from '../../src/components/Loading';
import Error from '../../src/components/Error';
import { fetchPortfolio, setPortfolioId } from '../../src/actions';

const props = {
  items: {
    22: {
      id: '22',
      title: 'title',
      description: 'description'
    }
  },
  fetching: null,
  error: null,
  setPortfolioId,
  fetchPortfolio
};

describe('Portfolio List', () => {
  const portfoliolist = shallow(<PortfolioList {...props} />);
  test('renders the component', () => {
    expect(portfoliolist.exists()).toBe(true);
  });
  test('renders portfolio items on fetching portfolio success', () => {
    expect(portfoliolist.find(PortfolioItem)).toHaveLength(1);
  });
  test('renders loading while fetching portfolio', () => {
    portfoliolist.setProps({ fetching: 1 });
    expect(portfoliolist.find(Loading)).toHaveLength(1);
  });
  test('renders error on fetching portfolio failure', () => {
    portfoliolist.setProps({ fetching: 0, error: 'error' });
    expect(portfoliolist.find(Error)).toHaveLength(1);
  });
});
