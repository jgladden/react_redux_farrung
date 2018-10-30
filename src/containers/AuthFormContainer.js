import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitLogin } from 'actions';
import AuthForm from 'components/AuthForm';
import formUtil from 'utils/formUtil';
import cookieUtil from 'utils/cookieUtil';

class AuthFormContainer extends Component {
    
  constructor(props) {
    super(props);
    this.formFields = {
      username: {
        tests: ['(.{5,})'],
      },
      password: {
        tests: ['password'],
      }
    };
    this.state = {
      fields: formUtil.initFields(this.formFields)
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
      this.props.submitLogin(validateForm.fieldValues);
      this.setCookie();
      this.setState({
        fields: formUtil.initFields(this.formFields)
      });
    } else {
      this.setState({fields: validateForm.fields});
    } 
  }

  setCookie = () => {
    let exp = new Date(+new Date + 1.44e+7);
    cookieUtil.setCookie('AUTH', 'isAuthenticated', exp, '/', '.farrung.com', true);
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
