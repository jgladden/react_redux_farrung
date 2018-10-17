import React from 'react';
import AuthContainer from '../../containers/AuthContainer';

const Admin = ({isAuthenticated}) => (
  <React.Fragment>
  {isAuthenticated ? (
    <p>Admin</p>
  ) : (
    <AuthContainer />
  )
  }
  </React.Fragment>
);

export default Admin;



