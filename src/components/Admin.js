import React from 'react';
import PropTypes from 'prop-types';

const Admin = ({primarySection}) => {
  if(primarySection !== 'admin')
    return null;
 
  return (
    <React.Fragment>
      <p>Admin Nav</p>
      <p>Admin Body</p>
    </React.Fragment>
  );
};

Admin.propTypes = {
  primarySection: PropTypes.string.isRequired
};

export default Admin;



