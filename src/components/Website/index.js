import React from 'react';
import PortfolioNavContainer from '../../containers/PortfolioNavContainer';
import PortfolioListContainer from '../../containers/PortfolioListContainer';
import PortfolioDetailContainer from '../../containers/PortfolioDetailContainer';

const Website = () => (
  <React.Fragment>
    <PortfolioNavContainer />
    <PortfolioDetailContainer />
    <PortfolioListContainer />
  </React.Fragment>
);

export default Website;


