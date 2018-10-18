import React from 'react';
import AuthContainer from '../../containers/AuthContainer';

const Admin = ({isAuthenticated}) => (
  <React.Fragment>
  <AuthContainer />
  {isAuthenticated &&
    <p>Admin</p>
  }
  </React.Fragment>
);

export default Admin;



