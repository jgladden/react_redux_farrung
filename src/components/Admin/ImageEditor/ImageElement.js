import React from 'react';
import PropTypes from 'prop-types';
import {imgPath} from 'config';

const ImageElement = ({name, path, onImageRemove}) => (
  <li
    key={name}
    id={name}
    draggable='true'
    className='dragElement'
  >      
    <img 
      src={path ? path : `${imgPath}${name}`} 
    />
    <button
      className='btnRemoveImage'
      onClick={onImageRemove}
    >
    X
    </button> 
  </li>
);

ImageElement.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  onImageRemove: PropTypes.func.isRequired
};

export default ImageElement;