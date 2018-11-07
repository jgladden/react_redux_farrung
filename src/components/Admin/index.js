import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import NotAuthorized from 'components/NotAuthorized';
import NavContainer from 'containers/Admin/NavContainer';
import ListContainer from 'containers/Admin/ListContainer';
import Add from 'components/Admin/Add';
import Loading from 'components/Loading';
import PageNotFound from 'components/PageNotFound';

const Admin = ({section, isAuthenticated}) => {

  if(section.primary === 'undefined')
    return(<Loading />);

  let display = '';
  if(isAuthenticated === true) {
    let SubPage = '';
    switch (section.secondary) {
    case 'add':
      SubPage = Add;
      break;
    default: 
      SubPage = ListContainer;
    }
    display = (
      <article id='admin'>
        <NavContainer />
        <SubPage />
      </article>
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



