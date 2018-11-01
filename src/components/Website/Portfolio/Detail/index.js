import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({portfolioDetails: { id, title }}) => {
  if(!id) return null;
  return (
    <div id='portfolioDetail'>
      <h1>{title}</h1>
    </div>
  );
};

Detail.propTypes = {
  portfolioDetails: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default Detail;
