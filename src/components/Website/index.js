import React from 'react';
import PortfolioNavContainer from '../../containers/PortfolioNavContainer';
import PortfolioListContainer from '../../containers/PortfolioListContainer';
import PortfolioDetailContainer from '../../containers/PortfolioDetailContainer';
import MessageFormContainer from '../../containers/MessageFormContainer';

const Website = () => (
  <React.Fragment>
    <MessageFormContainer />
    <PortfolioNavContainer />
    <PortfolioDetailContainer />
    <PortfolioListContainer />
  </React.Fragment>
);

export default Website;


