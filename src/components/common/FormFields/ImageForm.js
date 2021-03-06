import React from 'react';
import PropTypes from 'prop-types';

const ImageForm = ({id}) => (
  <input 
    type='file'
    id={`slide${id}`} 
    name={`slide${id}`}
    accept='.jpg'
  />
);

ImageForm.propTypes = {
  id: PropTypes.number.isRequired
};

export default ImageForm;
