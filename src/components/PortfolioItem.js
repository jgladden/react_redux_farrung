import React from 'react';
import Button from './button';
import PropTypes from 'prop-types';

const PortfolioItem = ({title, description}) => (
  <li> 
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={ {__html: description} }>
    </div>
  </li>
);


PortfolioItem.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}


export default PortfolioItem;

