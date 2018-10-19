import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitLogin, submitLogout } from '../actions';
import Auth from '../components/Auth';
import formUtil from '../utils/formUtil';

class AuthContainer extends Component {
    
  constructor(props) {
    super(props);
    this.formFields = {
      username: {
        tests: ['(.{5,})'],
      },
      password: {
        tests: ['password'],
      }
    }
    this.state = {
      fields: formUtil.initFields(this.formFields),
      displayLogin: false
    }
  }

  toggleLoginDisplay = () => {
    let displayLogin = this.state.displayLogin ? false : true;
    this.setState({displayLogin});
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
      submitLogout,
      auth
    } = this.props;
    return (
      <Auth
        fields={this.state.fields}
        displayLogin={this.state.displayLogin}
        toggleLoginDisplay={this.toggleLoginDisplay}
        handleChange={this.handleChange}
        submitLogin={this.handleSubmit}
        submitLogout={submitLogout}
        auth={auth}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps, 
  {
    submitLogin,
    submitLogout
  }
)(AuthContainer);
