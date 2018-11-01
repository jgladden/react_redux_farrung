import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({handleClick, title, description}) => (
  <li className='portfolioItem' onClick={handleClick}> 
    <p className='portfolioItem__heading'>{title}</p>
    <div dangerouslySetInnerHTML={ {__html: description} }>
    </div>
  </li>
);

ListItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ListItem;

