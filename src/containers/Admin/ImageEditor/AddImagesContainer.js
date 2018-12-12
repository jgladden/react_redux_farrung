import React,  { Component } from 'react';
import PropTypes from 'prop-types';
import AddImages from 'components/Admin/ImageEditor/AddImages';

class AddImagesContainer extends Component {

  getSlideIds = isHidden => {
    const slidenum = parseInt(
      this.props.slidenum.value
    );
    if(!slidenum || isHidden)
      return [];
    return Array(slidenum)
      .fill()
      .map((_, i) => i+1);
  }

  isHidden = () => {
    const {
      imagename,
      slidenum
    } = this.props;
    return (imagename.value === '' || 
       imagename.errors.length ||
       slidenum.value === '' ||
       slidenum.errors.length
    ) ? true : false; 
  }

  onImageAdded = id => {
console.log(id);
    console.log(`image ${id} added`);
  }

  render() {
    let isHidden = this.isHidden();
    return (
      <AddImages
        slideIds={this.getSlideIds(isHidden)}
        hidden={isHidden}
        onImageAdded={this.onImageAdded}
      />
    );
  }
}

AddImagesContainer.propTypes = {
  imagename: PropTypes.shape({
    value: PropTypes.string.isRequired,
    errors: PropTypes.array.isRequired
  }).isRequired,
  slidenum: PropTypes.shape({ 
    value: PropTypes.string.isRequired,
    errors: PropTypes.array.isRequired
  }).isRequired,
  imagesReady: PropTypes.func.isRequired
};


export default AddImagesContainer;

