import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { imgPath } from 'config';

const ListItem = ({item, setRoute}) => {
  const {
    id,
    type,
    title, 
    imagename, 
    slidenum
  } = item;

  const slide = slidenum === '1' ? '' : 1;

  return (
    <li 
      className='portfolioItem' 
      onClick={() => setRoute(`/portfolio/${type}/${id}`)}
    >
      <div> 
        <img src={`${imgPath}${imagename}${slide}.jpg`} />
        <p>{title}</p>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imagename: PropTypes.string.isRequired,
    slidenum: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  setRoute: PropTypes.func.isRequired
};

export default ListItem;

