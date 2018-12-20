import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { mergeAdminItem } from 'actions';
import formUtil from 'utils/formUtil';
import { getJwtHeader } from 'utils/authUtil';
import { editAdminItemUrl } from 'config';
import Form from 'components/Admin/Edit/Form';
import { dragSort } from 'utils/dragSort';

const formFields = {
  id: {
    tests: []
  },
  imageorder: {
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
        fields: formUtil.initFields(formFields, this.props.formInitValues)
      }
  }

  handleChange = e => {
    let fields = formUtil.getUpdatedFields(e, {...this.state.fields});
    this.setState({ fields });
  }

  handleSubmit = e => {
    e.preventDefault();
    let validateForm = formUtil.validateForm(
      {...this.state.fields}
    );
    this.setState({fields: validateForm.fields});
    if(validateForm.isValidForm) {
      let values = validateForm.fieldValues;
      this.setState({ 
        status: { 
          posting: 1
        }
      });
      this.postEdit(values);
    }
  }

  postEdit = values => {
    axios.post(editAdminItemUrl, values, getJwtHeader())
      .then(response => {
        let error = response.data.error;
        if(!error) {
          this.props.mergeAdminItem({values});
          const status = { success : 1 };
          this.setState({status});
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

  swapImageOrder = (dropName, dragName) => {
    const fields = {...this.state.fields};
    let orderArray = fields.imageorder.value;
    let dropIndex = orderArray.indexOf(dropName);
    let dragIndex = orderArray.indexOf(dragName);
    let b = orderArray[dropIndex];
    orderArray[dropIndex] = orderArray[dragIndex];
    orderArray[dragIndex] = b;
    fields.imageorder.value = orderArray;
    this.setState({fields});
  }

  componentDidMount() {
    dragSort(this.imageList.current, this.swapImageOrder);
  }

  render() {
    const {
      fields,
      status
    } = this.state;
    return (
      <Form
        fields={fields}
        handleChange={this.handleChange}
        submitForm={this.handleSubmit}
        status={status}
        selectOptions={selectOptions}
        imageListRef={this.imageList}
      />
    );
  }
}

FormContainer.propTypes = {
  formInitValues: PropTypes.object,
  mergeAdminItem: PropTypes.func.isRequired,
  setCurrentId: PropTypes.func.isRequired
};

export default connect(
  null, 
  {
    mergeAdminItem
  }
)(FormContainer);
