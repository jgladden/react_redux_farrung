import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Detail = props => {
  const {
    item: {
      id,
      title
    },
    nextId,
    prevId
  } = props;
  console.log(props);
  if(!id) return null;

  return (
    <div id='portfolioDetail'>
      <h1>{title}</h1>
    </div>
  );
};

Detail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default Detail;
