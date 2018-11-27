import './styles.scss';
import React from 'react';
import AuthFormContainer from 'containers/Auth/FormContainer';
import SignInContainer from 'containers/Auth/SignInContainer';

const NotAuthorized = () => (
  <div id='notAuthorized'>
    <p id='notAuthorized__heading'>
    USER LOGIN:
    </p>
    <SignInContainer />
  </div>
);

export default NotAuthorized;
