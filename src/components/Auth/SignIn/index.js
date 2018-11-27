/*
the sign in link and form (<AuthFormContainer />) will never be displayed
on sign out user is redirected to not authorized page
leaving in as example only
*/

import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import AuthFormContainer from 'containers/Auth/FormContainer';

const SignIn = props => {
  const {
    username, 
    submitLogout, 
    toggleLoginDisplay, 
    displayLogin, 
  } = props; 

  return(
    <div className='login'>
      {username && username !== '' ? (
        <p
          className='login__link'
          onClick={() => submitLogout()}
        >
        Sign Out
        </p>
      ) : (
        <p 
          className='login__link'
          onClick={() => toggleLoginDisplay()}
        >
        Sign In
        </p>
      )}
      <div className={`signInModal ${displayLogin ? 'display' : ''}`}>
        <AuthFormContainer />
      </div>
    </div>
  );
};

SignIn.propTypes = {
  username: PropTypes.string,
  submitLogout: PropTypes.func.isRequired,
  toggleLoginDisplay: PropTypes.func.isRequired,
  displayLogin: PropTypes.bool.isRequired,
};

export default SignIn;



