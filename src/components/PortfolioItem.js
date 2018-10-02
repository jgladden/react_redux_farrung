import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = ({handleClick, title, description}) => (
  <li onClick={handleClick}> 
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={ {__html: description} }>
    </div>
  </li>
);

PortfolioItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PortfolioItem;

