import React from 'react';
import PropTypes from 'prop-types';

const ImageAdd = ({label, imageUpload}) => (
  <div>
    <label>{label}</label>
    <input 
      type='file'
      id={`images`} 
      name={`images`}
      multiple
      accept='.jpg'
      onChange={imageUpload}
    />
  </div>
);

ImageAdd.propTypes = {
  label: PropTypes.string.isRequired,
  imageUpload: PropTypes.func.isRequired
};

export default ImageAdd;