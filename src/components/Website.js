import React from 'react';
import PropTypes from 'prop-types';
import PortfolioNavContainer from '../containers/PortfolioNavContainer';
import PortfolioListContainer from '../containers/PortfolioListContainer';
import PortfolioDetailContainer from '../containers/PortfolioDetailContainer';

const Website = ({primarySection}) => {
  if(primarySection !== 'portfolio')
    return null;
  return (
    <React.Fragment>
      <PortfolioNavContainer />
      <PortfolioDetailContainer />
      <PortfolioListContainer />
    </React.Fragment>
  );
};

Website.propTypes = {
  primarySection: PropTypes.string.isRequired
};

export default Website;


