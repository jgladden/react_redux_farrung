import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitLogout } from 'actions';
import SignIn from 'components/SignIn';
import cookieUtil from 'utils/cookieUtil';

class SignInContainer extends Component {
  state = {
    displayLogin: false
  } 

  static getDerivedStateFromProps(props, state) {
    const { displayLogin } = state;
    const { isAuthenticated } = props;
    if(isAuthenticated && displayLogin)
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
    cookieUtil.deleteCookie('AUTH', '/', '.farrung.com');
    this.props.submitLogout();
  }

  render() {
    return (
      <SignIn
        isAuthenticated={this.props.isAuthenticated}
        submitLogout={this.submitLogout}
        displayLogin={this.state.displayLogin}
        toggleLoginDisplay={this.toggleLoginDisplay}
      />
    );
  }
}

SignInContainer.propTypes = {
  isAuthenticated: PropTypes.bool,
  submitLogout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps, 
  {
    submitLogout
  }
)(SignInContainer);
