import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { mergeAdminItem } from 'actions';
import formUtil from 'utils/formUtil';
import { uniqueId } from 'utils';
import { editAdminItemUrl, addAdminItemUrl } from 'config';
import ItemForm from 'components/Admin/ItemForm';

const formFields = {
  id: {
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
  },
  imagename: {
    tests: ['(.{2,})']
  },
  slidenum: {
    tests: ['^([0-9]+)$']
  }
};

const selectOptions = {
  type: ['type', 'online', 'print'].map(
    type => <option key={type} value={type}>{type}</option>
  ),
  slidenum: formUtil.getSelectOptions(10, '#'),
  rating: formUtil.getSelectOptions(10, 'rating'),
  year: formUtil.getSelectOptions(30, 'yyyy', 'year'),
  day: formUtil.getSelectOptions(31, 'dd', 'pre0'),
  month: formUtil.getSelectOptions(12, 'mm', 'pre0'),
};

class ItemFormContainer extends Component {
    
  state = {
    status: {},
    editMode: this.props.formInitValues ? true : false,
    fields: formUtil.initFields(formFields, this.props.formInitValues)
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
      if(this.state.editMode) {
        this.postEdit(values);
      } else {
        this.postAdd(values);
      }
      this.setState({ 
        status: { 
          posting: 1 
        }
      });
    }
  }

  postEdit = values => {
    axios.post(editAdminItemUrl, values)
      .then(response => {
        let error = response.data.error;
        if(!error) {
          this.props.mergeAdminItem({values});
          this.props.toggleEditDisplay();
          const fields = {...this.state.fields};
          const status = { success : 1 };
          this.setState({fields,status});
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

  postAdd = values => {
    values.id = uniqueId();
    axios.post(addAdminItemUrl, values)
      .then(response => {
        let error = response.data.error;
        if(!error) {
          this.props.mergeAdminItem({values});
          const fields = formUtil.initFields(formFields);
          const status = { success : 1 };
          this.setState({fields,status});
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
      status
    } = this.state;
    return (
      <ItemForm
        fields={fields}
        handleChange={this.handleChange}
        submitForm={this.handleSubmit}
        status={status}
        selectOptions={selectOptions}
      />
    );
  }
}

ItemFormContainer.propTypes = {
  formInitValues: PropTypes.object,
  mergeAdminItem: PropTypes.func.isRequired,
  toggleEditDisplay: PropTypes.func
};

export default connect(
  null, 
  {
    mergeAdminItem
  }
)(ItemFormContainer);