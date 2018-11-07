import React, { Component } from 'react';
import axios from 'axios';
import { postMessageUrl } from 'config';
import formUtil from 'utils/formUtil';
import Form from 'components/Website/Contact/Form';

class FormContainer extends Component {
    
  constructor(props) {
    super(props);
    this.formFields = {
      email: {
        tests: ['email'],
      },
      subject: {
        tests: ['(.{3,})'],
      },
      message: {
        tests: ['(.{10,})'],
      }
    };
    this.state = {
      status: {},
      fields: formUtil.initFields(this.formFields),
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
    if(validateForm.isValidForm) {
      this.postForm(validateForm.fieldValues);
    } else {
      this.setState({fields: validateForm.fields});
    }
  }

  postForm = fields => {
    this.setState({status: { posting: 1 }});
    axios.post(postMessageUrl, fields)
      .then(response => {
        let success = response.data.success;
        if(success) {
          this.setState({
            status: { success: 1 },
            fields: formUtil.initFields(this.formFields)
          });
        } else {
          this.setState({      
            status: {
              error: 'Message could not be sent.'
            } 
          });
        }
      })
      .catch(error => this.setState({
        status: {       
          error: error.toString()
        }
      }));

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
        submitMessage={this.handleSubmit}
        status={status}
      />
    );
  }
}

export default FormContainer;
