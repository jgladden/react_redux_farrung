import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitLogout } from 'actions';
import SignIn from 'components/SignIn';
import cookieUtil from 'utils/cookieUtil';

class SignInContainer extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      displayLogin: false
    };
  }

  toggleLoginDisplay = () => {
    let displayLogin = this.state.displayLogin ? false : true;
    this.setState({displayLogin});
  }

  submitLogout = () => {
    cookieUtil.deleteCookie('AUTH', '/', '.farrung.com');
    this.props.submitLogout();
  }

  componentDidUpdate(prevProps) {
    const {
      isAuthenticated
    } = this.props;
    if(isAuthenticated && 
       isAuthenticated !== prevProps.isAuthenticated
    ) {
      this.setState({displayLogin: false});
    }
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
