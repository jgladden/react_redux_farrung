import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { imgPath } from 'config';

const ListItem = props => {
  const {
    handleClick, 
    title, 
    imagename, 
    slidenum
  } = props;

  const slide = slidenum === '1' ? '' : 1;

  return (
    <li 
      className='portfolioItem' 
      onClick={handleClick}
    >
      <div> 
        <img src={`${imgPath}${imagename}${slide}.jpg`} />
        <p>{title}</p>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  imagename: PropTypes.string.isRequired,
  slidenum: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ListItem;

