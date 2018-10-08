import React from 'react';
import { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import PortfolioNav from '../../src/components/PortfolioNav';
import Button from '../../src/components/button';

const props = {
  portfolioTypes: ['online'],
  setPortfolioType: () => {}
}

describe('<PortfolioNav />', () => {
  test('renders the component', () => {
    const wrapper = shallow(<PortfolioNav {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
  test('renders buttons using portfolioTypes values', () => {
    const wrapper = mount(<PortfolioNav {...props} />);
    wrapper.setProps({
        portfolioTypes: ['online', 'print']
    });
    expect(wrapper.find('button')).toHaveLength(2);
  });
});

