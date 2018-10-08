import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PortfolioNav from '../../src/components/PortfolioNav';
import Button from '../../src/components/button';


describe('<PortfolioNav />', () => {
  test('renders the component', () => {
    const wrapper = shallow(<PortfolioNav portfolioTypes={['online', 'print']} setPortfolioType={()=>{}} />);
    expect(wrapper.exists()).toBe(true);
  });
});

