import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { imgPath } from 'config';

const ListItem = ({item, setRoute}) => {
  const {
    id,
    type,
    title, 
    imageorder
  } = item;

  return (
    <li 
      className='portfolioItem' 
      onClick={() => setRoute(`/portfolio/${type}/${id}`)}
    >
      <div> 
        <img src={`${imgPath}${imageorder[0]}`} />
        <p>{title}</p>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imageorder: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  setRoute: PropTypes.func.isRequired
};

export default ListItem;

