import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const PortfolioDetail = ({portfolioDetails: { id, title }}) => {
  if(!id) return null;
  return (
    <div id='portfolioDetail'>
      <h1>{title}</h1>
    </div>
  );
};

PortfolioDetail.propTypes = {
  portfolioDetails: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default PortfolioDetail;
