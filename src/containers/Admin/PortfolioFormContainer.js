import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { mergeAdminItem } from 'actions';
import formUtil from 'utils/formUtil';
import { uniqueId } from 'utils';
import { editAdminItemUrl, addAdminItemUrl } from 'config';
import PortfolioForm from 'components/Admin/PortfolioForm';

class PortfolioFormContainer extends Component {
    
  constructor(props) {
    super(props);
    this.formFields = {
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
    this.editMode = props.formInitValues ? true : false;
    this.state = {
      status: {},
      fields: formUtil.initFields(this.formFields, props.formInitValues)
    };
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
      if(this.editMode) {
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
          const fields = formUtil.initFields(this.formFields);
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
      <PortfolioForm
        fields={fields}
        handleChange={this.handleChange}
        submitForm={this.handleSubmit}
        status={status}
      />
    );
  }
}

PortfolioFormContainer.propTypes = {
  formInitValues: PropTypes.object,
  mergeAdminItem: PropTypes.func.isRequired,
  toggleEditDisplay: PropTypes.func
};

export default connect(
  null, 
  {
    mergeAdminItem
  }
)(PortfolioFormContainer);
