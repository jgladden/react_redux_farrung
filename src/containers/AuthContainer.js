import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitLogin, submitLogout } from '../actions';
import Auth from '../components/Auth';

const initialState = {
  username: '',
  password: ''
}

class AuthContainer extends Component {
    
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = ({target: { name, value}}) => {
    this.setState({[name]: value});
  }

  formIsValid = () => {
    let isValid = false;
    const {
      username,
      password
    } = this.state;
    if (
      username && 
      username.length > 3 &&
      password &&
      password.length > 5
    ) isValid = true;
    return isValid;
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.formIsValid()) {
      this.props.submitLogin({...this.state});
      this.setState(initialState);
    } else {
      console.log('not valid input');
    }
  }

  render() {
    const {
      submitLogout,
      auth
    } = this.props;
    return (
      <Auth
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
