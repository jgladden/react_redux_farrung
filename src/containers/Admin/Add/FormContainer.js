import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { mergeAdminItem } from 'actions';
import formUtil from 'utils/formUtil';
import { getJwtHeader } from 'utils/authUtil';
import { uniqueId } from 'utils';
import { addAdminItemUrl } from 'config';
import Form from 'components/Admin/Add/Form';
import { dragSort } from 'utils/dragSort';

const formFields = {
  id: {
    value: uniqueId(),
    tests: []
  },
  type: {
    tests: ['^(?!\s*$|type).+']
  },
  title: {
    tests: ['(.{3,})']
  },
  client: {
    tests: ['^(\s*|(.{3,}))']
  },
  description: {
    tests: ['(.{15,})']
  },
  link: {
    tests: ['^(\s*|https?:.*)$']
  },
  display: {
    tests: []
  },
  rating: {
    tests: ['^([0-9]+)$']
  },
  day: {
    tests: ['^([0-9]+)$']
  },
  month: {
    tests: ['^([0-9]+)$']
  },
  year: {
    tests: ['^([0-9]+)$']
  }
};

const selectOptions = {
  type: ['type', 'online', 'print'].map(
    type => <option key={type} value={type}>{type}</option>
  ),
  rating: formUtil.getSelectOptions(10, 'rating'),
  year: formUtil.getSelectOptions(30, 'yyyy', 'year'),
  day: formUtil.getSelectOptions(31, 'dd', 'pre0'),
  month: formUtil.getSelectOptions(12, 'mm', 'pre0'),
};

class FormContainer extends Component {

  constructor(props) {
      super(props);
      this.imageList = React.createRef();
      this.state = {
        status: {},
        fields: formUtil.initFields(formFields),
        uploadedImages: []
      }
  }

  handleChange = e => {
    if(e.target.type === 'file') {
      this.imageUpload(e);
    } else {
      let fields = formUtil.getUpdatedFields(e, {...this.state.fields});
      this.setState({ fields });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let validateForm = formUtil.validateForm(
      {...this.state.fields}
    );
    this.setState({fields: validateForm.fields});
    if(validateForm.isValidForm) {
      let values = validateForm.fieldValues;
      values.imageorder = this.getImageOrder();
      this.setState({ 
        status: { 
          posting: 1
        }
      });
      this.postAdd(values);
    }
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
    const id = this.state.fields.id.value;
    this.formData = new FormData();
    let uploadedImages = [];
    for(let i = 0; i < len; i++) {
      let file = fileInput.files[i];
      let name = `${id}_${i+1}.jpg`;
      let path = URL.createObjectURL(file);
      this.formData.append('file[]', file, name);
      promises.push(this.validateImage(path));
      uploadedImages.push({name, path});
    }
    Promise.all(promises)
      .then(() => {
        this.setState({uploadedImages});
      })
      .catch((error) => {
        this.setState({status: { error }});
      });
  }

  swapImageOrder = (dropName, dragName) => {
    const {
      uploadedImages
    } = this.state;
    let dropIndex, dragIndex;
    for(let i = 0; i < uploadedImages.length; i++) {
      if(uploadedImages[i].name === dropName)
        dropIndex = i;
      if(uploadedImages[i].name === dragName)
        dragIndex = i;
    }
    let b = uploadedImages[dropIndex];
    uploadedImages[dropIndex] = uploadedImages[dragIndex];
    uploadedImages[dragIndex] = b;
    this.setState({uploadedImages});
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      uploadedImages
    } = this.state;
    if(prevState.uploadedImages.length !== uploadedImages.length) {
      dragSort(this.imageList.current, this.swapImageOrder);
    }
  }

  getImageOrder = () => {
    let parent = this.imageList.current;
    let imageOrder = [];
    for (let i = 0; i < parent.childNodes.length; i++) {
      imageOrder.push(parent.childNodes[i].id);
    }
    return imageOrder;    
  }

  postAdd = values => {
    for(let key in values) {
      this.formData.append(key, values[key]);
    }
    axios.post(addAdminItemUrl, this.formData, getJwtHeader())
      .then(response => {
        let error = response.data.error;
        if(!error) {
          this.props.mergeAdminItem({values});
          formFields.id.value = uniqueId();
          this.setState({
            fields: formUtil.initFields(formFields),
            uploadedImages: [],
            status: { success : 1 }
          });
        } else {
          this.setState({status: { error }});
        }
      })
      .catch(error => {
        this.setState({
          status: { 
            error: error.toString() 
          }
        });
      });
  }

  render() {
    const {
      fields,
      status,
      uploadedImages
    } = this.state;

    return (
      <Form
        fields={fields}
        handleChange={this.handleChange}
        submitForm={this.handleSubmit}
        status={status}
        selectOptions={selectOptions}
        imageListRef={this.imageList}
        uploadedImages={uploadedImages}
      />
    );
  }
}

FormContainer.propTypes = {
  mergeAdminItem: PropTypes.func.isRequired
};

export default connect(
  null, 
  {
    mergeAdminItem
  }
)(FormContainer);
