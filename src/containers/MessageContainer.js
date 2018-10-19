import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitMessage } from '../actions';
import Message from '../components/Message/';
import formUtil from '../utils/formUtil';

class MessageContainer extends Component {
    
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
    }
    this.state = {
      fields: formUtil.initFields(this.formFields),
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
    if(validateForm.isValidForm) {
      this.props.submitMessage(validateForm.fieldValues);
      this.setState({
        fields: formUtil.initFields(this.formFields),
        displayLogin: false
      });
    } else {
      this.setState({fields: validateForm.fields});
    } 
  }

  render() {
    const {
      submitMessage,
      message
    } = this.props;
    return (
      <Message
        fields={this.state.fields}
        handleChange={this.handleChange}
        submitMessage={this.handleSubmit}
        message={message}
      />
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

export default connect(
  mapStateToProps, 
  {
    submitMessage
  }
)(MessageContainer);
