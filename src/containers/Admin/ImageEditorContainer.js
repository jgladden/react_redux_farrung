import React, { Component}  from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'utils';
import ImageEditor from 'components/Admin/ImageEditor';
import { dragSort } from 'utils/dragSort'; 

class ImageEditorContainer extends Component {

  constructor(props) {
    super(props);
  }

  validateImage = path => {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => {
        if(img.width === 513 && img.height === 352) {
          resolve();
        } else {
          reject('Images must be 513x352.');
        }
      }
      img.src = path;
    });
  }

  imageUpload = e => {
    let promises = [];
    const fileInput = e.currentTarget;
    const len = fileInput.files.length;
    if(len === 0) return;
    let images = this.props.images.slice();
    for(let i = 0; i < len; i++) {
      let file = fileInput.files[i];
      let name = `${this.props.imagename}_${uniqueId()}.jpg`;
      let path = URL.createObjectURL(file);
      promises.push(this.validateImage(path));
      images.push({name, path, file});
    }
    Promise.all(promises)
      .then(() => {
        this.props.onImagesUpdate(images);
      })
      .catch((error) => {
        this.props.onImagesError(error);
      });
  }

  onImageRemove = e => {
    const {
      images
    } = this.props;
    let nameToRemove = e.currentTarget.parentNode.id;
    for(let i = 0; i < images.length; i++) {
      let image = images[i];
      if(image.name === nameToRemove) {
        if(image.file) {
          images.splice(i,1);
        } else {
          image.remove = true;
        }
      }
    };
    this.props.onImagesUpdate(images);
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      images
    } = this.props;
    if(prevProps.images.length !== images.length) {
      new dragSort(images.slice(), this.props.onImagesUpdate);
    }
  }

  componentDidMount() {
    const {
      images
    } = this.props;
    if(images.length) {
      new dragSort(images.slice(), this.props.onImagesUpdate);
    }
  }

  render() {
    return (
      <ImageEditor
        images={this.props.images}
        imageUpload={this.imageUpload}
        onImageRemove={this.onImageRemove}
      />
    );
  }
}

ImageEditorContainer.propTypes = {
  imagename: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  onImagesUpdate: PropTypes.func.isRequired,
  onImagesError: PropTypes.func.isRequired
}


export default ImageEditorContainer;