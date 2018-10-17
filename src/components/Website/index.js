import React from 'react';
import PortfolioNavContainer from '../../containers/PortfolioNavContainer';
import PortfolioListContainer from '../../containers/PortfolioListContainer';
import PortfolioDetailContainer from '../../containers/PortfolioDetailContainer';
import MessageContainer from '../../containers/MessageContainer';

const Website = () => (
  <React.Fragment>
    <MessageContainer />
    <PortfolioNavContainer />
    <PortfolioDetailContainer />
    <PortfolioListContainer />
  </React.Fragment>
);

export default Website;


