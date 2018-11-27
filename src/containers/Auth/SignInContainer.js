import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitLogout } from 'actions';
import SignIn from 'components/Auth/SignIn';
import cookieUtil from 'utils/cookieUtil';

class SignInContainer extends Component {

  state = {
    displayLogin: false
  } 

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.token && prevState.displayLogin)
      return { displayLogin: false };
    return null;
  }

  toggleLoginDisplay = () => {
    const { displayLogin } = this.state;
    this.setState({
      displayLogin: !displayLogin
    });
  }

  submitLogout = () => {
    this.props.submitLogout();
  }

  render() {
    return (
      <SignIn
        token={this.props.token}
        submitLogout={this.submitLogout}
        displayLogin={this.state.displayLogin}
        toggleLoginDisplay={this.toggleLoginDisplay}
      />
    );
  }
}

SignInContainer.propTypes = {
  token: PropTypes.string,
  submitLogout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(
  mapStateToProps, 
  {
    submitLogout
  }
)(SignInContainer);
