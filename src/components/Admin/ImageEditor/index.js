import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ImageElement from 'components/Admin/ImageEditor/ImageElement';
import ImageAdd from 'components/Admin/ImageEditor/ImageAdd';

const ImageEditor = ({images, imageUpload, onImageRemove}) => (
  <React.Fragment>
  { images.length === 0 && 
    <ImageAdd
      label='Images .jpg, 513x352'
      imageUpload={imageUpload}
    />
  }
  <ul id='dragSorter'>
  { images.map(image => {
    if(!image.remove === true)
      return (
        <ImageElement
          key={image.name}
          name={image.name}
          path={image.path}
          onImageRemove={onImageRemove}
        />
      )
  })}
  </ul>
  { images.length > 0 && 
    <ImageAdd
      label='Add Images .jpg, 513x352'
      imageUpload={imageUpload}
    />
  }
  </React.Fragment>
);

ImageEditor.propTypes = {
  images: PropTypes.array.isRequired,
  imageUpload: PropTypes.func.isRequired,
  onImageRemove: PropTypes.func.isRequired 
};

export default ImageEditor;