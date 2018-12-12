import React from 'react';

const ImageForm = ({id}) => (
  <input 
    type='file'
    id={`slide${id}`} 
    name={`slide${id}`}
    accept='.jpg'
  />
);

export default ImageForm;
