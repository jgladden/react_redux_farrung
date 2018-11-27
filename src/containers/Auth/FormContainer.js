import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitLogin } from 'actions';
import AuthForm from 'components/Auth/Form';
import formUtil from 'utils/formUtil';
import cookieUtil from 'utils/cookieUtil';

const formFields = {
  username: {
    tests: ['(.{5,})'],
  },
  password: {
    tests: ['password'],
  }
};

class AuthFormContainer extends Component {
    
  state = {
    fields: formUtil.initFields(formFields)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.auth.token && !prevState.token) 
      return {
        token: nextProps.auth.token,
        fields: formUtil.initFields(formFields)
      }
    return null; 
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
      this.props.submitLogin(validateForm.fieldValues);
    } else {
      this.setState({fields: validateForm.fields});
    } 
  }

  initFields = () => {
    this.setState({
      fields: formUtil.initFields(formFields)
    });
  }

  render() {
    return (
      <AuthForm
        fields={this.state.fields}
        handleChange={this.handleChange}
        submitLogin={this.handleSubmit}
        auth={this.props.auth}
      />
    );
  }
}

AuthFormContainer.propTypes = {
  auth: PropTypes.object.isRequired,
  submitLogin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps, 
  {
    submitLogin
  }
)(AuthFormContainer);
