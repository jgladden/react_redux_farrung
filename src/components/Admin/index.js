import React from 'react';
import PropTypes from 'prop-types';
import NotAuthorized from '../NotAuthorized';
import AdminNav from '../../containers/AdminNavContainer';
import AdminList from '../../containers/AdminListContainer';
import AdminAdd from '../AdminAdd';

const Admin = ({section, isAuthenticated}) => {
  let display = '';
  if(isAuthenticated === true) {
    let SubPage = '';
    switch (section.secondary) {
    case 'add':
      SubPage = AdminAdd;
      break;
    default: 
      SubPage = AdminList;
    }
    display = (
      <React.Fragment>
        <AdminNav />
        <SubPage />
      </React.Fragment>
    );
  } else {
    display = <NotAuthorized />;
  } 

  return(display);
};

Admin.propTypes = {
  section: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};

export default Admin;



