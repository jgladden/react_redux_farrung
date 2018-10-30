import React from 'react';
import PortfolioNavContainer from 'containers/Website/PortfolioNavContainer';
import PortfolioListContainer from 'containers/Website/PortfolioListContainer';
import PortfolioDetailContainer from 'containers/Website/PortfolioDetailContainer';
import MessageFormContainer from 'containers/Website/MessageFormContainer';

const Website = () => (
  <React.Fragment>
    <MessageFormContainer />
    <PortfolioNavContainer />
    <PortfolioDetailContainer />
    <PortfolioListContainer />
  </React.Fragment>
);

export default Website;


