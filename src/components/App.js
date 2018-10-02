import React from 'react';
import PortfolioNavContainer from '../containers/PortfolioNavContainer';
import PortfolioListContainer from '../containers/PortfolioListContainer';
import PortfolioDetailContainer from '../containers/PortfolioDetailContainer';

const App = () => (
  <React.Fragment>
    <PortfolioNavContainer />
    <PortfolioDetailContainer />
    <PortfolioListContainer />
  </React.Fragment>
);

export default App;
