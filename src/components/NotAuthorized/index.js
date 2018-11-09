import './styles.scss';
import React from 'react';
import AuthFormContainer from 'containers/Admin/AuthFormContainer';

const NotAuthorized = () => (
  <div id='notAuthorized'>
    <p id='notAuthorized__heading'>
    USER LOGIN:
    </p>
    <AuthFormContainer />
  </div>
);

export default NotAuthorized;
