import React from 'react';
import AuthContainer from '../../containers/AuthContainer';
import NotAuthorized from '../NotAuthorized';
import AdminNav from '../../containers/AdminNavContainer';
import AdminList from '../AdminList';
import AdminAdd from '../AdminAdd';
import AdminEdit from '../AdminEdit';

const Admin = ({section, isAuthenticated}) => {

  let SubPage = '';
  switch(section.secondary) {
  case 'add':
    SubPage = AdminAdd;
    break;
  case 'edit':
    SubPage = AdminEdit;
    break;
  default: 
    SubPage = AdminList
  }

  return(
    <React.Fragment>
      <AuthContainer />
      {isAuthenticated ? (
        <React.Fragment>
          <AdminNav />
          <SubPage />
        </React.Fragment>
      ) : (
        <NotAuthorized />
      )}
    </React.Fragment>
  );
};

export default Admin;



